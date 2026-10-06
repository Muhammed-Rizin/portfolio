import React from "react";
import Card from "./Card";

export function ShipmentsSkeleton() {
  return (
    <div className="pb-32">
      <h2 className="text-xl font-mono font-bold text-white border-b border-neutral-800 pb-4 mb-8">
        SHIPMENTS
      </h2>

      <div className="grid gap-4">
        {[1, 2, 3, 4].map((i) => (
          <Card key={i} className="p-6">
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div className="flex-1 min-w-0 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-4 bg-red-950/50 border border-red-900/50 rounded-xs animate-pulse" />
                  <div className="w-48 sm:w-72 h-6 bg-neutral-900 rounded-xs animate-shimmer" />
                </div>
                <div className="space-y-1.5 max-w-xl">
                  <div className="w-full h-3.5 bg-neutral-900/80 rounded-xs animate-shimmer" />
                  <div className="w-4/5 h-3.5 bg-neutral-900/60 rounded-xs animate-shimmer" />
                </div>
              </div>
              <div className="self-start w-8 h-8 border border-neutral-800 bg-neutral-950 rounded-xs shrink-0 flex items-center justify-center">
                <div className="w-3.5 h-3.5 bg-neutral-800 rounded-xs animate-pulse" />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export function RepositoriesSkeleton() {
  return (
    <div className="pb-32">
      <h2 className="text-xl font-mono font-bold text-white border-b border-neutral-800 pb-4 mb-8">
        GITHUB_REPOSITORIES
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Card key={i} className="p-6 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-3">
                <div className="w-5 h-5 rounded-full bg-neutral-900 animate-pulse" />
                <div className="w-14 h-4 border border-neutral-800 bg-neutral-900/80 rounded-xs animate-shimmer" />
              </div>

              <div className="w-36 h-5 bg-neutral-900 rounded-xs animate-shimmer mb-2.5" />

              <div className="space-y-1.5">
                <div className="w-full h-3 bg-neutral-900/80 rounded-xs animate-shimmer" />
                <div className="w-5/6 h-3 bg-neutral-900/60 rounded-xs animate-shimmer" />
                <div className="w-2/3 h-3 bg-neutral-900/40 rounded-xs animate-shimmer" />
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <div className="w-12 h-3 bg-neutral-900/60 rounded-xs animate-pulse" />
              <div className="w-12 h-3 bg-neutral-900/60 rounded-xs animate-pulse" />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export function LogsSkeleton() {
  return (
    <div className="pb-32">
      <h2 className="text-xl font-mono font-bold text-white border-b border-neutral-800 pb-4 mb-8">
        SYSTEM_LOGS
      </h2>

      <div className="relative border-l border-neutral-800 ml-3 space-y-8">
        {[1, 2, 3, 4, 5, 6].map((_, i) => (
          <div key={i} className="pl-8 relative">
            <div
              className={`absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full border ${
                i === 0 ? "bg-red-600 border-red-600 animate-pulse" : "bg-black border-neutral-800"
              }`}
            />
            <div className="flex items-center gap-2 mb-2">
              <div className="w-20 h-4 border border-neutral-900 bg-neutral-950 rounded-xs animate-pulse" />
              <div className="w-44 h-4 bg-neutral-900 rounded-xs animate-shimmer" />
            </div>
            <div className="w-3/4 max-w-md h-3 bg-neutral-900/60 rounded-xs animate-shimmer" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function CertificatesSkeleton() {
  return (
    <div className="pb-32">
      <h2 className="text-xl font-mono font-bold text-white border-b border-neutral-800 pb-4 mb-8">
        DIGITAL_CREDENTIALS
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[1, 2].map((i) => (
          <Card key={i} className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-xs bg-neutral-900 animate-pulse" />
                <div className="w-24 h-3.5 bg-red-950/40 border border-red-900/30 rounded-xs animate-pulse" />
              </div>
              <div className="w-20 h-4 border border-neutral-800 bg-neutral-950 rounded-xs animate-shimmer" />
            </div>

            <div className="w-56 h-5 bg-neutral-900 rounded-xs animate-shimmer mb-2" />
            <div className="w-28 h-3.5 bg-neutral-900/60 rounded-xs animate-shimmer mb-4" />

            <div className="flex gap-2 flex-wrap">
              <div className="w-14 h-3.5 border border-neutral-800 bg-neutral-950 rounded-xs animate-pulse" />
              <div className="w-18 h-3.5 border border-neutral-800 bg-neutral-950 rounded-xs animate-pulse" />
              <div className="w-12 h-3.5 border border-neutral-800 bg-neutral-950 rounded-xs animate-pulse" />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
