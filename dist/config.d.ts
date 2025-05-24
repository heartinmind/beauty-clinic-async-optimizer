/**
 * Configuration settings for Beauty Clinic Chatbot
 * 엘리트 뷰티 클리닉 상담봇 설정
 */
export declare const config: {
    api: {
        defaultPageSize: number;
        maxRetries: number;
        timeout: number;
        baseUrl: string;
    };
    clinic: {
        name: string;
        location: string;
        address: string;
        phone: string;
        businessHours: {
            open: string;
            close: string;
            timezone: string;
        };
    };
    customerService: {
        defaultCustomerId: string;
        sessionTimeout: number;
        maxConcurrentSessions: number;
        supportedLanguages: string[];
        defaultLanguage: string;
    };
    treatments: {
        categories: readonly ["botox", "filler", "laser", "facial", "skincare"];
        maxAppointmentsPerDay: number;
        defaultDuration: number;
        bookingAdvanceDays: number;
    };
    notifications: {
        reminderTimes: readonly ["24h", "2h", "30min"];
        defaultMethods: readonly ["email", "sms", "push"];
        retryAttempts: number;
    };
    mobile: {
        deepLinkScheme: string;
        pushNotificationEnabled: boolean;
        syncInterval: number;
        maxOfflineTime: number;
    };
    payment: {
        currency: string;
        maxDiscountPercentage: number;
        maxDiscountAmount: number;
        acceptedMethods: readonly ["card", "cash", "transfer"];
    };
    security: {
        maxLoginAttempts: number;
        sessionTokenLength: number;
        passwordMinLength: number;
        dataRetentionDays: number;
    };
    logging: {
        level: string;
        maxFileSize: string;
        maxFiles: number;
        logToConsole: boolean;
    };
    testing: {
        mockData: boolean;
        testCustomerId: string;
        testTimeout: number;
    };
};
export type TreatmentCategory = typeof config.treatments.categories[number];
export type ReminderTime = typeof config.notifications.reminderTimes[number];
export type NotificationMethod = typeof config.notifications.defaultMethods[number];
export type PaymentMethod = typeof config.payment.acceptedMethods[number];
export declare const getBusinessHours: () => string;
export declare const isBusinessHours: (time?: Date) => boolean;
export declare const formatPrice: (amount: number) => string;
export declare const getMaxDiscount: (type: "percentage" | "amount") => number;
export declare const getEnvironmentConfig: () => {
    api: {
        timeout: number;
        defaultPageSize: number;
        maxRetries: number;
        baseUrl: string;
    };
    logging: {
        level: string;
        maxFileSize: string;
        maxFiles: number;
        logToConsole: boolean;
    };
    clinic: {
        name: string;
        location: string;
        address: string;
        phone: string;
        businessHours: {
            open: string;
            close: string;
            timezone: string;
        };
    };
    customerService: {
        defaultCustomerId: string;
        sessionTimeout: number;
        maxConcurrentSessions: number;
        supportedLanguages: string[];
        defaultLanguage: string;
    };
    treatments: {
        categories: readonly ["botox", "filler", "laser", "facial", "skincare"];
        maxAppointmentsPerDay: number;
        defaultDuration: number;
        bookingAdvanceDays: number;
    };
    notifications: {
        reminderTimes: readonly ["24h", "2h", "30min"];
        defaultMethods: readonly ["email", "sms", "push"];
        retryAttempts: number;
    };
    mobile: {
        deepLinkScheme: string;
        pushNotificationEnabled: boolean;
        syncInterval: number;
        maxOfflineTime: number;
    };
    payment: {
        currency: string;
        maxDiscountPercentage: number;
        maxDiscountAmount: number;
        acceptedMethods: readonly ["card", "cash", "transfer"];
    };
    security: {
        maxLoginAttempts: number;
        sessionTokenLength: number;
        passwordMinLength: number;
        dataRetentionDays: number;
    };
    testing: {
        mockData: boolean;
        testCustomerId: string;
        testTimeout: number;
    };
} | {
    api: {
        timeout: number;
        defaultPageSize: number;
        maxRetries: number;
        baseUrl: string;
    };
    logging: {
        level: string;
        logToConsole: boolean;
        maxFileSize: string;
        maxFiles: number;
    };
    clinic: {
        name: string;
        location: string;
        address: string;
        phone: string;
        businessHours: {
            open: string;
            close: string;
            timezone: string;
        };
    };
    customerService: {
        defaultCustomerId: string;
        sessionTimeout: number;
        maxConcurrentSessions: number;
        supportedLanguages: string[];
        defaultLanguage: string;
    };
    treatments: {
        categories: readonly ["botox", "filler", "laser", "facial", "skincare"];
        maxAppointmentsPerDay: number;
        defaultDuration: number;
        bookingAdvanceDays: number;
    };
    notifications: {
        reminderTimes: readonly ["24h", "2h", "30min"];
        defaultMethods: readonly ["email", "sms", "push"];
        retryAttempts: number;
    };
    mobile: {
        deepLinkScheme: string;
        pushNotificationEnabled: boolean;
        syncInterval: number;
        maxOfflineTime: number;
    };
    payment: {
        currency: string;
        maxDiscountPercentage: number;
        maxDiscountAmount: number;
        acceptedMethods: readonly ["card", "cash", "transfer"];
    };
    security: {
        maxLoginAttempts: number;
        sessionTokenLength: number;
        passwordMinLength: number;
        dataRetentionDays: number;
    };
    testing: {
        mockData: boolean;
        testCustomerId: string;
        testTimeout: number;
    };
} | {
    testing: {
        mockData: boolean;
        testCustomerId: string;
        testTimeout: number;
    };
    api: {
        defaultPageSize: number;
        maxRetries: number;
        timeout: number;
        baseUrl: string;
    };
    clinic: {
        name: string;
        location: string;
        address: string;
        phone: string;
        businessHours: {
            open: string;
            close: string;
            timezone: string;
        };
    };
    customerService: {
        defaultCustomerId: string;
        sessionTimeout: number;
        maxConcurrentSessions: number;
        supportedLanguages: string[];
        defaultLanguage: string;
    };
    treatments: {
        categories: readonly ["botox", "filler", "laser", "facial", "skincare"];
        maxAppointmentsPerDay: number;
        defaultDuration: number;
        bookingAdvanceDays: number;
    };
    notifications: {
        reminderTimes: readonly ["24h", "2h", "30min"];
        defaultMethods: readonly ["email", "sms", "push"];
        retryAttempts: number;
    };
    mobile: {
        deepLinkScheme: string;
        pushNotificationEnabled: boolean;
        syncInterval: number;
        maxOfflineTime: number;
    };
    payment: {
        currency: string;
        maxDiscountPercentage: number;
        maxDiscountAmount: number;
        acceptedMethods: readonly ["card", "cash", "transfer"];
    };
    security: {
        maxLoginAttempts: number;
        sessionTokenLength: number;
        passwordMinLength: number;
        dataRetentionDays: number;
    };
    logging: {
        level: string;
        maxFileSize: string;
        maxFiles: number;
        logToConsole: boolean;
    };
};
export default config;
//# sourceMappingURL=config.d.ts.map