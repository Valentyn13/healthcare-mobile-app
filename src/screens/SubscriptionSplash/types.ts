export interface IPlanBenefit {
    title: string;
    description: string;
}

export interface IPlan {
    id: string;
    price: number;
    description: string;
    plan_benefits: IPlanBenefit[];
}
