import type { ComponentType } from "react"

export type FaqItem = { q: string; a: string }

export type TwoPlayersSections = {
    HowToPlay: ComponentType
    HowItWorks: ComponentType
    WhySettle: ComponentType
    UseCases: ComponentType
    Faq: ComponentType
    faqItems: FaqItem[]
}
