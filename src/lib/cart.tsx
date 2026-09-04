"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type CartLine = {
  key: string;
  slug: string;
  name: string;
  size: string;
  color: string;
  qty: number;
  price: number;
  image: string;
};

type CartContextValue = {
  lines: CartLine[];
  add: (line: Omit<CartLine, "key">) => void;
  remove: (key: string) => void;
  setQty: (key: string, qty: number) => void;
  clear: () => void;
  count: number;
  total: number;
  open: boolean;
  setOpen: (open: boolean) => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "ryc-cart";

function lineKey(slug: string, size: string, color: string) {
  return `${slug}__${size}__${color}`;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    /* eslint-disable react-hooks/set-state-in-effect -- hydrate cart from localStorage after mount */
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setLines(JSON.parse(raw) as CartLine[]);
    } catch {
      /* ignore */
    }
    setReady(true);
    /* eslint-enable react-hooks/set-state-in-effect */
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
  }, [lines, ready]);

  const add = useCallback((line: Omit<CartLine, "key">) => {
    const key = lineKey(line.slug, line.size, line.color);
    setLines((prev) => {
      const existing = prev.find((item) => item.key === key);
      if (existing) {
        return prev.map((item) =>
          item.key === key ? { ...item, qty: item.qty + line.qty } : item,
        );
      }
      return [...prev, { ...line, key }];
    });
    setOpen(true);
  }, []);

  const remove = useCallback((key: string) => {
    setLines((prev) => prev.filter((item) => item.key !== key));
  }, []);

  const setQty = useCallback((key: string, qty: number) => {
    if (qty < 1) {
      setLines((prev) => prev.filter((item) => item.key !== key));
      return;
    }
    setLines((prev) =>
      prev.map((item) => (item.key === key ? { ...item, qty } : item)),
    );
  }, []);

  const clear = useCallback(() => setLines([]), []);

  const value = useMemo<CartContextValue>(() => {
    const count = lines.reduce((sum, line) => sum + line.qty, 0);
    const total = lines.reduce((sum, line) => sum + line.qty * line.price, 0);
    return { lines, add, remove, setQty, clear, count, total, open, setOpen };
  }, [lines, add, remove, setQty, clear, open]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
