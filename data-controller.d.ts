import { ReactiveController, ReactiveControllerHost } from 'lit';
export interface GiftCard {
    id: number;
    last_characters: string;
    balance: string;
    amount_used: string;
    presentment_amount_used: string;
}
export interface Discount {
    title: string;
    amount: string;
    application_type: string;
    value_type: string;
}
export interface Currency {
    format: string;
}
export interface CheckoutData {
    checkout: {
        applied_discounts: Array<Discount>;
        gift_cards: Array<GiftCard>;
        total_discount_amount: string;
        total_line_items_price: string;
        payment_due: string;
        presentment_currency: string;
        currency_format: Currency;
    };
}
export declare class DataController implements ReactiveController {
    private host;
    _token: string;
    _authorizationToken: string;
    _data: CheckoutData;
    _discounts: Array<Discount>;
    _gift_cards: Array<GiftCard>;
    _error: boolean;
    constructor(host: ReactiveControllerHost);
    private getMetaUrl;
    private getDataFromMetaURL;
    private getTokens;
    queryCheckout(method?: string, body?: string | null): Promise<Response>;
    clearDiscount(event: Event, code: string): Promise<void>;
    clearGiftCard(event: Event, giftCard: GiftCard): Promise<void>;
    applyCode(code: string): Promise<void>;
    private discountQuery;
    hostConnected(): Promise<void>;
}
//# sourceMappingURL=data-controller.d.ts.map