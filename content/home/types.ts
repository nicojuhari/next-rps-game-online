import type { ComponentType } from "react"

export type FaqItem = { q: string; a: string }

export type HomeSections = {
    Strategy: ComponentType
    Rules: ComponentType
    Statistics: ComponentType
    History: ComponentType
    Faq: ComponentType
    faqItems: FaqItem[]
}
