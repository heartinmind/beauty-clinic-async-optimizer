/**
 * Common Type Definitions for Beauty Clinic Chatbot
 * 엘리트 뷰티 클리닉 상담봇 공통 타입 정의
 */
export type UUID = string;
export type KoreanText = string;
export type Currency = number;
export type Timestamp = string;
export type PhoneNumber = string;
export type EmailAddress = string;
export type TreatmentCategory = 'botox' | 'filler' | 'laser' | 'facial' | 'skincare' | 'dermatology';
export type SkinType = 'dry' | 'oily' | 'combination' | 'sensitive' | 'normal';
export type SkinConcern = '주름' | '색소침착' | '모공' | '여드름' | '탄력' | '홍조';
export type AppointmentStatus = 'pending' | 'confirmed' | 'cancelled' | 'completed' | 'no-show';
export type PaymentStatus = 'pending' | 'paid' | 'refunded' | 'failed';
export type PaymentMethod = 'card' | 'cash' | 'transfer' | 'insurance';
export type NotificationMethod = 'email' | 'sms' | 'push' | 'kakao';
export type ReminderTime = '24h' | '2h' | '30min' | '10min';
export type NotificationType = 'appointment' | 'promotion' | 'reminder' | 'survey' | 'general';
export interface BeautyTreatment {
    id: UUID;
    name: KoreanText;
    category: TreatmentCategory;
    price: Currency;
    duration: number;
    description?: KoreanText;
    beforeCare?: KoreanText[];
    afterCare?: KoreanText[];
    contraindications?: KoreanText[];
    tags: string[];
    isActive: boolean;
    createdAt: Timestamp;
    updatedAt: Timestamp;
}
export interface Customer {
    id: UUID;
    name: KoreanText;
    phone: PhoneNumber;
    email?: EmailAddress;
    birthDate?: string;
    gender?: 'male' | 'female' | 'other';
    address: {
        street: KoreanText;
        city: KoreanText;
        district: KoreanText;
        zipCode?: string;
    };
    profile: CustomerProfile;
    createdAt: Timestamp;
    updatedAt: Timestamp;
}
export interface CustomerProfile {
    skinType: SkinType;
    concerns: SkinConcern[];
    allergies?: KoreanText[];
    previousTreatments: TreatmentHistory[];
    preferences: {
        language: 'ko' | 'en';
        notificationMethods: NotificationMethod[];
        preferredTime?: string;
        notes?: KoreanText;
    };
    tags: string[];
}
export interface TreatmentHistory {
    id: UUID;
    treatmentId: UUID;
    treatmentName: KoreanText;
    date: Timestamp;
    doctor: KoreanText;
    price: Currency;
    notes?: KoreanText;
    satisfaction?: number;
    sideEffects?: KoreanText[];
}
export interface Appointment {
    id: UUID;
    customerId: UUID;
    treatmentId: UUID;
    date: string;
    timeSlot: string;
    duration: number;
    status: AppointmentStatus;
    doctor?: KoreanText;
    location: KoreanText;
    notes?: KoreanText;
    reminders: AppointmentReminder[];
    createdAt: Timestamp;
    updatedAt: Timestamp;
}
export interface AppointmentReminder {
    id: UUID;
    type: ReminderTime;
    method: NotificationMethod;
    sent: boolean;
    sentAt?: Timestamp;
}
export interface Cart {
    customerId: UUID;
    items: CartItem[];
    subtotal: Currency;
    discount?: {
        type: 'percentage' | 'amount';
        value: number;
        reason: KoreanText;
    };
    total: Currency;
    updatedAt: Timestamp;
}
export interface CartItem {
    productId: UUID;
    name: KoreanText;
    quantity: number;
    price: Currency;
    total: Currency;
}
export interface Payment {
    id: UUID;
    appointmentId: UUID;
    customerId: UUID;
    amount: Currency;
    method: PaymentMethod;
    status: PaymentStatus;
    transactionId?: string;
    processedAt?: Timestamp;
    refundedAt?: Timestamp;
    metadata?: Record<string, any>;
}
export interface Notification {
    id: UUID;
    customerId: UUID;
    type: NotificationType;
    method: NotificationMethod;
    title: KoreanText;
    message: KoreanText;
    sent: boolean;
    sentAt?: Timestamp;
    readAt?: Timestamp;
    data?: Record<string, any>;
}
export interface QRCode {
    id: UUID;
    customerId: UUID;
    type: 'discount' | 'appointment' | 'loyalty';
    value: number;
    expiresAt: Timestamp;
    used: boolean;
    usedAt?: Timestamp;
    qrCodeData: string;
}
export interface Satisfaction {
    id: UUID;
    customerId: UUID;
    appointmentId: UUID;
    rating: number;
    feedback: KoreanText;
    categories: {
        service: number;
        cleanliness: number;
        result: number;
        value: number;
    };
    wouldRecommend: boolean;
    submittedAt: Timestamp;
}
export interface MobileApp {
    customerId: UUID;
    deviceId: string;
    platform: 'ios' | 'android';
    appVersion: string;
    pushToken?: string;
    lastLogin: Timestamp;
    preferences: {
        pushEnabled: boolean;
        language: 'ko' | 'en';
        theme: 'light' | 'dark';
    };
}
export interface DeepLink {
    id: UUID;
    scheme: string;
    path: string;
    parameters: Record<string, string>;
    customerId?: UUID;
    expiresAt?: Timestamp;
    clickCount: number;
    createdAt: Timestamp;
}
export interface APIResponse<T = any> {
    success: boolean;
    data?: T;
    message?: KoreanText;
    error?: {
        code: string;
        message: KoreanText;
        details?: any;
    };
    timestamp: Timestamp;
}
export interface PaginatedResponse<T> extends APIResponse<T[]> {
    pagination: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    };
}
export interface ToolResponse {
    status: 'success' | 'error' | 'pending';
    message: KoreanText;
    data?: any;
}
export interface AppointmentToolResponse extends ToolResponse {
    appointment_id?: UUID;
    date?: string;
    time?: string;
    location?: KoreanText;
    confirmation_time?: string;
}
export interface RecommendationResponse extends ToolResponse {
    recommendations: BeautyTreatment[];
}
export interface CartResponse extends ToolResponse {
    items: CartItem[];
    subtotal: Currency;
    total?: Currency;
}
export interface SearchFilters {
    category?: TreatmentCategory;
    priceRange?: {
        min: Currency;
        max: Currency;
    };
    duration?: {
        min: number;
        max: number;
    };
    skinType?: SkinType;
    concerns?: SkinConcern[];
    tags?: string[];
}
export interface SearchResults<T> {
    items: T[];
    total: number;
    filters: SearchFilters;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
}
export interface ChatEvent {
    type: 'message' | 'tool_call' | 'error' | 'typing';
    timestamp: Timestamp;
    data: any;
}
export interface AuditLog {
    id: UUID;
    userId?: UUID;
    customerId?: UUID;
    action: string;
    entity: string;
    entityId: UUID;
    changes?: Record<string, any>;
    timestamp: Timestamp;
    ipAddress?: string;
    userAgent?: string;
}
export type Partial<T> = {
    [P in keyof T]?: T[P];
};
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;
export declare const TREATMENT_CATEGORIES: readonly ["botox", "filler", "laser", "facial", "skincare", "dermatology"];
export declare const SKIN_TYPES: readonly ["dry", "oily", "combination", "sensitive", "normal"];
export declare const NOTIFICATION_METHODS: readonly ["email", "sms", "push", "kakao"];
export declare const REMINDER_TIMES: readonly ["24h", "2h", "30min", "10min"];
export declare const isValidTreatmentCategory: (value: string) => value is TreatmentCategory;
export declare const isValidSkinType: (value: string) => value is SkinType;
export declare const isValidNotificationMethod: (value: string) => value is NotificationMethod;
export declare const isValidReminderTime: (value: string) => value is ReminderTime;
declare const _default: {
    TREATMENT_CATEGORIES: readonly ["botox", "filler", "laser", "facial", "skincare", "dermatology"];
    SKIN_TYPES: readonly ["dry", "oily", "combination", "sensitive", "normal"];
    NOTIFICATION_METHODS: readonly ["email", "sms", "push", "kakao"];
    REMINDER_TIMES: readonly ["24h", "2h", "30min", "10min"];
    isValidTreatmentCategory: (value: string) => value is TreatmentCategory;
    isValidSkinType: (value: string) => value is SkinType;
    isValidNotificationMethod: (value: string) => value is NotificationMethod;
    isValidReminderTime: (value: string) => value is ReminderTime;
};
export default _default;
//# sourceMappingURL=index.d.ts.map