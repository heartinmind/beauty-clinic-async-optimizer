"use strict";
/**
 * Common Type Definitions for Beauty Clinic Chatbot
 * 엘리트 뷰티 클리닉 상담봇 공통 타입 정의
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidReminderTime = exports.isValidNotificationMethod = exports.isValidSkinType = exports.isValidTreatmentCategory = exports.REMINDER_TIMES = exports.NOTIFICATION_METHODS = exports.SKIN_TYPES = exports.TREATMENT_CATEGORIES = void 0;
// 상수 타입
exports.TREATMENT_CATEGORIES = [
    'botox',
    'filler',
    'laser',
    'facial',
    'skincare',
    'dermatology'
];
exports.SKIN_TYPES = [
    'dry',
    'oily',
    'combination',
    'sensitive',
    'normal'
];
exports.NOTIFICATION_METHODS = [
    'email',
    'sms',
    'push',
    'kakao'
];
exports.REMINDER_TIMES = [
    '24h',
    '2h',
    '30min',
    '10min'
];
// 타입 가드 함수들
const isValidTreatmentCategory = (value) => {
    return exports.TREATMENT_CATEGORIES.includes(value);
};
exports.isValidTreatmentCategory = isValidTreatmentCategory;
const isValidSkinType = (value) => {
    return exports.SKIN_TYPES.includes(value);
};
exports.isValidSkinType = isValidSkinType;
const isValidNotificationMethod = (value) => {
    return exports.NOTIFICATION_METHODS.includes(value);
};
exports.isValidNotificationMethod = isValidNotificationMethod;
const isValidReminderTime = (value) => {
    return exports.REMINDER_TIMES.includes(value);
};
exports.isValidReminderTime = isValidReminderTime;
// 기본 내보내기
exports.default = {
    TREATMENT_CATEGORIES: exports.TREATMENT_CATEGORIES,
    SKIN_TYPES: exports.SKIN_TYPES,
    NOTIFICATION_METHODS: exports.NOTIFICATION_METHODS,
    REMINDER_TIMES: exports.REMINDER_TIMES,
    isValidTreatmentCategory: exports.isValidTreatmentCategory,
    isValidSkinType: exports.isValidSkinType,
    isValidNotificationMethod: exports.isValidNotificationMethod,
    isValidReminderTime: exports.isValidReminderTime
};
//# sourceMappingURL=index.js.map