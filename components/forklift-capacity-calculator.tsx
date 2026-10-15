"use client"

import { useId, useState } from "react"
import { CheckCircle2, AlertTriangle } from "lucide-react"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"
import { waLink } from "@/lib/site-config"

/**
 * Rule-of-thumb capacity at a longer load centre: rated capacity scaled by
 * rated load centre over actual load centre. A load centre shorter than the
 * rated one never raises capacity above the data plate figure.
 */
export function capacityAtLoadCentre(ratedKg: number, ratedCentreMm: number, actualCentreMm: number) {
  if (actualCentreMm <= ratedCentreMm) return ratedKg
  return (ratedKg * ratedCentreMm) / actualCentreMm
}

const inputClass =
  "w-full rounded-lg border-2 border-border bg-white px-4 py-3 font-medium text-foreground transition-colors focus:border-accent focus:outline-none"
const labelClass = "mb-2 block text-sm font-bold uppercase tracking-wide text-foreground"
const hintClass = "mt-1.5 text-xs font-medium text-muted-foreground"

const kg = (value: number) => `${Math.round(value).toLocaleString("en-US")} kg`

export function ForkliftCapacityCalculator() {
  const id = useId()
  const [ratedKg, setRatedKg] = useState<number>(3000)
  const [ratedCentre, setRatedCentre] = useState<number>(500)
  const [loadKg, setLoadKg] = useState<number>(2000)
  const [mode, setMode] = useState<"even" | "known">("even")
  const [loadDepth, setLoadDepth] = useState<number>(1200)
  const [knownCentre, setKnownCentre] = useState<number>(600)
  const [allowance, setAllowance] = useState<number>(20)

  const actualCentre = mode === "even" ? loadDepth / 2 : knownCentre
  const valid = ratedKg > 0 && ratedCentre > 0 && loadKg > 0 && actualCentre > 0
  const capacity = valid ? capacityAtLoadCentre(ratedKg, ratedCentre, actualCentre) : 0
  const required = loadKg * (1 + allowance / 100)
  const withinMargin = valid && capacity >= required
  const withinCapacity = valid && capacity >= loadKg

  const whatsappHref = waLink(
    `Hi Seven Lift, I used your forklift capacity calculator. Load: ${Math.round(loadKg)} kg, load centre about ${Math.round(actualCentre)} mm. Please recommend a forklift.`,
  )

  const numberField = (
    key: string,
    label: string,
    value: number,
    onChange: (value: number) => void,
    hint?: string,
  ) => (
    <div>
      <label htmlFor={`${id}-${key}`} className={labelClass}>
        {label}
      </label>
      <input
        id={`${id}-${key}`}
        type="number"
        inputMode="numeric"
        min={1}
        step={50}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className={inputClass}
      />
      {hint && <p className={hintClass}>{hint}</p>}
    </div>
  )

  return (
    <div className="grid gap-8 rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8 lg:grid-cols-2" data-lead-placement="calculator">
      <form className="space-y-5" onSubmit={(event) => event.preventDefault()} aria-label="Forklift capacity inputs">
        <div className="grid gap-5 sm:grid-cols-2">
          {numberField("rated", "Rated capacity (kg)", ratedKg, setRatedKg)}
          {numberField("rated-centre", "Rated load centre (mm)", ratedCentre, setRatedCentre)}
        </div>
        <p className={`${hintClass} -mt-3`}>
          Both figures are printed on the forklift&apos;s data plate. The values shown are only an example.
        </p>

        {numberField("load", "Load weight (kg)", loadKg, setLoadKg)}

        <fieldset>
          <legend className={labelClass}>Where is the load&apos;s centre?</legend>
          <div className="flex flex-col gap-2 sm:flex-row sm:gap-5">
            <label className="flex items-center gap-2 font-medium text-foreground">
              <input type="radio" name={`${id}-mode`} checked={mode === "even"} onChange={() => setMode("even")} className="accent-accent" />
              Evenly spread load
            </label>
            <label className="flex items-center gap-2 font-medium text-foreground">
              <input type="radio" name={`${id}-mode`} checked={mode === "known"} onChange={() => setMode("known")} className="accent-accent" />
              I know the centre of gravity
            </label>
          </div>
        </fieldset>

        {mode === "even"
          ? numberField(
              "depth",
              "Load length along the forks (mm)",
              loadDepth,
              setLoadDepth,
              "For an evenly spread load the centre is half this length: a 1200 mm pallet loaded lengthways has its centre at 600 mm.",
            )
          : numberField("centre", "Centre of gravity from the fork face (mm)", knownCentre, setKnownCentre)}

        <div>
          <label htmlFor={`${id}-allowance`} className={labelClass}>
            Safety margin above the load
          </label>
          <select
            id={`${id}-allowance`}
            value={allowance}
            onChange={(event) => setAllowance(Number(event.target.value))}
            className={inputClass}
          >
            <option value={0}>None</option>
            <option value={10}>10%</option>
            <option value={20}>20%</option>
            <option value={25}>25%</option>
          </select>
        </div>
      </form>

      <div className="flex flex-col gap-5" aria-live="polite">
        <div className="rounded-xl bg-secondary/50 p-6">
          <dl className="space-y-3 text-sm">
            <div className="flex justify-between gap-4">
              <dt className="font-semibold text-muted-foreground">Load centre</dt>
              <dd className="font-extrabold text-foreground">{valid ? `${Math.round(actualCentre)} mm` : "n/a"}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="font-semibold text-muted-foreground">Estimated capacity at that centre</dt>
              <dd className="font-extrabold text-foreground">{valid ? kg(capacity) : "n/a"}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="font-semibold text-muted-foreground">Load plus margin</dt>
              <dd className="font-extrabold text-foreground">{valid ? kg(required) : "n/a"}</dd>
            </div>
          </dl>
        </div>

        {valid && (
          <div
            className={`flex gap-3 rounded-xl border-2 p-5 ${withinMargin ? "border-emerald-600/40 bg-emerald-50" : "border-amber-500/50 bg-amber-50"}`}
          >
            {withinMargin ? (
              <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-700" size={22} />
            ) : (
              <AlertTriangle className="mt-0.5 shrink-0 text-amber-700" size={22} />
            )}
            <p className="text-sm font-extrabold text-foreground">
              {withinMargin
                ? "The load and your margin are within the estimated capacity at this load centre."
                : withinCapacity
                  ? "The load is within the estimated capacity, but not with the margin you chose."
                  : "The load is over the estimated capacity at this load centre."}
            </p>
          </div>
        )}

        <p className="text-xs font-medium leading-relaxed text-muted-foreground">
          A rule-of-thumb estimate for counterbalance forklifts on firm, level ground. It does not cover reduced
          capacity at full mast height or with attachments. The forklift&apos;s own data plate and load chart always
          take priority.
        </p>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-bold text-accent-foreground transition-transform hover:scale-[1.02]"
        >
          <WhatsAppIcon size={18} />
          Send these numbers for a forklift recommendation
        </a>
      </div>
    </div>
  )
}
