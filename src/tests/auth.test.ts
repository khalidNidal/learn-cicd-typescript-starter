import { describe, expect, test } from "vitest";
// استيراد الدالة الصحيحة مع إضافة .js للتوافق مع ESM
import { getAPIKey } from "../api/auth.js";

describe("getAPIKey", () => {
  test("should exist", () => {
    // الآن الـ Expect سيجد الدالة المعرفة فعلياً
    expect(getAPIKey).toBeDefined();
  });
});
