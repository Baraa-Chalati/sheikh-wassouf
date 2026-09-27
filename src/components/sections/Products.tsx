"use client";

import { useLanguage } from "@/context/LanguageContext";
import SectionHeading from "@/components/ui/SectionHeading";
import { products } from "@/lib/site-data";
import ProductCard from "./ProductCard";

export default function Products() {
  const { t } = useLanguage();

  return (
    <section id="products" className="section-padding bg-card py-24 sm:py-32">
      <div className="mx-auto max-w-8xl">
        <SectionHeading
          eyebrow={t.products.eyebrow}
          title={t.products.title}
          description={t.products.description}
        />

        <div className="-mx-6 mt-16 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-4 lg:mx-0 lg:grid lg:grid-cols-4 lg:overflow-visible lg:px-0 lg:pb-0">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
