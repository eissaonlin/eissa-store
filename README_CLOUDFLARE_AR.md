# إعداد نشر عيسى ستور على Cloudflare Workers

هذه ملفات إعداد أولية لاختيار مسار OpenNext المناسب لتطبيق Next.js على Cloudflare Workers. لا يعني وجودها أن التطبيق أصبح منشورًا أو جاهزًا لاستقبال طلبات حقيقية.

## إعدادات البناء عند ربط GitHub بـ Cloudflare
- Build command: `npm run build`
- Deploy command: `npx opennextjs-cloudflare deploy`
- لا تستخدم `npx wrangler deploy` مباشرة قبل توليد مخرجات OpenNext.

## متطلبات قبل استقبال طلبات حقيقية
1. إنشاء مشروع Supabase وتشغيل `supabase/schema.sql` ومراجعة سياسات RLS.
2. ضبط متغيرات البيئة المطلوبة في إعدادات Worker: `NEXT_PUBLIC_SUPABASE_URL` و`NEXT_PUBLIC_SUPABASE_ANON_KEY`.
3. اختبار البناء والنشر ومعالجة أي أخطاء تظهر في سجل البناء.
4. مراجعة أمان الطلبات والتحقق من الأسعار والمخزون على الخادم قبل استقبال العملاء.

لا تضع مفاتيح سرية داخل GitHub. ملف `.env.example` لا يحتوي على مفاتيح حقيقية.
