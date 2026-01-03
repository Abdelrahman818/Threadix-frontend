(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/config.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "END_POINT",
    ()=>END_POINT
]);
const API_BASE_URL = "http://localhost:8080/api";
const END_POINT = {
    LOGIN: `${API_BASE_URL}/auth/login`,
    SIGNUP: `${API_BASE_URL}/auth/signup`,
    VERIFY_USER: `${API_BASE_URL}/auth/verifyUser`,
    VERIFY_TOKEN: `${API_BASE_URL}/auth/verifyToken`,
    PRODUCTS: `${API_BASE_URL}/products`,
    SEARCH: `${API_BASE_URL}/products/search`,
    GET_PRODUCT: (id)=>`${API_BASE_URL}/products/${id}`
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ViewBtn.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const ViewBtn = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "e0e3eb15ad80bb9e47c5b6b0e193c73d27a98331fa0e8c64529d46ca0f088bc7") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e0e3eb15ad80bb9e47c5b6b0e193c73d27a98331fa0e8c64529d46ca0f088bc7";
    }
    const { itemId } = t0;
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    let t1;
    if ($[1] !== itemId || $[2] !== router) {
        const route = ()=>{
            router.push(`item/${itemId}`);
        };
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: route,
            className: "btn",
            children: "View"
        }, void 0, false, {
            fileName: "[project]/components/ViewBtn.jsx",
            lineNumber: 22,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = itemId;
        $[2] = router;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    return t1;
};
_s(ViewBtn, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ViewBtn;
const __TURBOPACK__default__export__ = ViewBtn;
var _c;
__turbopack_context__.k.register(_c, "ViewBtn");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ProductCard.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ViewBtn$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ViewBtn.jsx [app-client] (ecmascript)");
;
;
;
const ProductCard = (props)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(16);
    if ($[0] !== "5735c83a5e2b9ce48edc4d11bb0de65a64f9488efc0e3c323e50fe99d6330a7a") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5735c83a5e2b9ce48edc4d11bb0de65a64f9488efc0e3c323e50fe99d6330a7a";
    }
    let t0;
    if ($[1] !== props.image) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "img-box",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: props.image,
                alt: "Product"
            }, void 0, false, {
                fileName: "[project]/components/ProductCard.jsx",
                lineNumber: 13,
                columnNumber: 35
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/ProductCard.jsx",
            lineNumber: 13,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = props.image;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    let t1;
    if ($[3] !== props.title) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "name",
            children: props.title
        }, void 0, false, {
            fileName: "[project]/components/ProductCard.jsx",
            lineNumber: 21,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = props.title;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    let t2;
    if ($[5] !== props.salePrice) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "price",
            children: [
                "$",
                props.salePrice
            ]
        }, void 0, true, {
            fileName: "[project]/components/ProductCard.jsx",
            lineNumber: 29,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = props.salePrice;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    let t3;
    if ($[7] !== props.id) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ViewBtn$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            itemId: props.id
        }, void 0, false, {
            fileName: "[project]/components/ProductCard.jsx",
            lineNumber: 37,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = props.id;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    let t4;
    if ($[9] !== t1 || $[10] !== t2 || $[11] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "info",
            children: [
                t1,
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/components/ProductCard.jsx",
            lineNumber: 45,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = t1;
        $[10] = t2;
        $[11] = t3;
        $[12] = t4;
    } else {
        t4 = $[12];
    }
    let t5;
    if ($[13] !== t0 || $[14] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "product-card",
            children: [
                t0,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/components/ProductCard.jsx",
            lineNumber: 55,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = t0;
        $[14] = t4;
        $[15] = t5;
    } else {
        t5 = $[15];
    }
    return t5;
};
_c = ProductCard;
const __TURBOPACK__default__export__ = ProductCard;
var _c;
__turbopack_context__.k.register(_c, "ProductCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Filters.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
;
;
const Filters = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(17);
    if ($[0] !== "f29a9ecfa1e76b0db66bcf4bb92ac4013d2c23cfdccb2132931dc25470e4dce1") {
        for(let $i = 0; $i < 17; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f29a9ecfa1e76b0db66bcf4bb92ac4013d2c23cfdccb2132931dc25470e4dce1";
    }
    const { target, getTarget, getSort } = t0;
    let t1;
    if ($[1] !== getTarget) {
        t1 = (e)=>getTarget(e.target.value);
        $[1] = getTarget;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== t1 || $[4] !== target) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "search",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                placeholder: "Search products...",
                id: "search",
                value: target,
                onChange: t1
            }, void 0, false, {
                fileName: "[project]/components/Filters.jsx",
                lineNumber: 25,
                columnNumber: 34
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/Filters.jsx",
            lineNumber: 25,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = t1;
        $[4] = target;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    let t3;
    if ($[6] !== getSort) {
        t3 = (e_0)=>getSort(e_0.target.value);
        $[6] = getSort;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    let t5;
    let t6;
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "",
            children: "Sort by"
        }, void 0, false, {
            fileName: "[project]/components/Filters.jsx",
            lineNumber: 45,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "assending",
            children: "Price: Low → High"
        }, void 0, false, {
            fileName: "[project]/components/Filters.jsx",
            lineNumber: 46,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "dessending",
            children: "Price: High → Low"
        }, void 0, false, {
            fileName: "[project]/components/Filters.jsx",
            lineNumber: 47,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "new",
            children: "Newest"
        }, void 0, false, {
            fileName: "[project]/components/Filters.jsx",
            lineNumber: 48,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = t4;
        $[9] = t5;
        $[10] = t6;
        $[11] = t7;
    } else {
        t4 = $[8];
        t5 = $[9];
        t6 = $[10];
        t7 = $[11];
    }
    let t8;
    if ($[12] !== t3) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "sort",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                onChange: t3,
                defaultValue: "",
                children: [
                    t4,
                    t5,
                    t6,
                    t7
                ]
            }, void 0, true, {
                fileName: "[project]/components/Filters.jsx",
                lineNumber: 61,
                columnNumber: 32
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/Filters.jsx",
            lineNumber: 61,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = t3;
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    let t9;
    if ($[14] !== t2 || $[15] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "filters",
            children: [
                t2,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/components/Filters.jsx",
            lineNumber: 69,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = t2;
        $[15] = t8;
        $[16] = t9;
    } else {
        t9 = $[16];
    }
    return t9;
};
_c = Filters;
const __TURBOPACK__default__export__ = Filters;
var _c;
__turbopack_context__.k.register(_c, "Filters");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/shop/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Shop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/config.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ProductCard.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Filters$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Filters.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function Shop() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(27);
    if ($[0] !== "6a9bd1dcea90e36617d2952209f217ef282e2bed2434eca2b87f3207c513bbed") {
        for(let $i = 0; $i < 27; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6a9bd1dcea90e36617d2952209f217ef282e2bed2434eca2b87f3207c513bbed";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [target, setTarget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [sort, setSort] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "Shop[getProducts]": ()=>{
                fetch(__TURBOPACK__imported__module__$5b$project$5d2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["END_POINT"].PRODUCTS, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(_ShopGetProductsAnonymous).then({
                    "Shop[getProducts > (anonymous)()]": (json)=>{
                        setProducts(json.data);
                    }
                }["Shop[getProducts > (anonymous)()]"]).catch(_ShopGetProductsAnonymous2);
            }
        })["Shop[getProducts]"];
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const getProducts = t1;
    let t2;
    if ($[3] !== target) {
        t2 = ({
            "Shop[getMatchedProducts]": ()=>{
                fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["END_POINT"].SEARCH}/${target}`).then(_ShopGetMatchedProductsAnonymous).then({
                    "Shop[getMatchedProducts > (anonymous)()]": (json_0)=>{
                        setProducts(json_0.data);
                    }
                }["Shop[getMatchedProducts > (anonymous)()]"]).catch(_ShopGetMatchedProductsAnonymous2);
            }
        })["Shop[getMatchedProducts]"];
        $[3] = target;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const getMatchedProducts = t2;
    let t3;
    if ($[5] !== getMatchedProducts || $[6] !== target.length) {
        t3 = ({
            "Shop[useEffect()]": ()=>{
                if (target.length > 0) {
                    const timeHandler = setTimeout({
                        "Shop[useEffect() > setTimeout()]": ()=>{
                            getMatchedProducts();
                        }
                    }["Shop[useEffect() > setTimeout()]"], 500);
                    return ()=>clearTimeout(timeHandler);
                } else {
                    getProducts();
                }
            }
        })["Shop[useEffect()]"];
        $[5] = getMatchedProducts;
        $[6] = target.length;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] !== target) {
        t4 = [
            target
        ];
        $[8] = target;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    if ($[10] !== products || $[11] !== sort) {
        t5 = ({
            "Shop[useEffect()]": ()=>{
                if (sort === "assending") {
                    products.sort(_ShopUseEffectProductsSort);
                } else {
                    if (sort === "dessending") {
                        products.sort(_ShopUseEffectProductsSort2);
                    } else {
                        if (sort === "new") {
                            products.sort(_ShopUseEffectProductsSort3);
                        }
                    }
                }
                setProducts([
                    ...products
                ]);
            }
        })["Shop[useEffect()]"];
        $[10] = products;
        $[11] = sort;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    let t6;
    if ($[13] !== sort) {
        t6 = [
            sort
        ];
        $[13] = sort;
        $[14] = t6;
    } else {
        t6 = $[14];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t5, t6);
    let t7;
    let t8;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = ({
            "Shop[useEffect()]": ()=>getProducts()
        })["Shop[useEffect()]"];
        t8 = [];
        $[15] = t7;
        $[16] = t8;
    } else {
        t7 = $[15];
        t8 = $[16];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t7, t8);
    let t9;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "shop-hero",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "title",
                    children: "Shop"
                }, void 0, false, {
                    fileName: "[project]/app/shop/page.jsx",
                    lineNumber: 145,
                    columnNumber: 41
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "subtitle",
                    children: "Explore our latest collections"
                }, void 0, false, {
                    fileName: "[project]/app/shop/page.jsx",
                    lineNumber: 145,
                    columnNumber: 72
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/shop/page.jsx",
            lineNumber: 145,
            columnNumber: 10
        }, this);
        $[17] = t9;
    } else {
        t9 = $[17];
    }
    let t10;
    if ($[18] !== target) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Filters$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            target: target,
            getTarget: setTarget,
            getSort: setSort
        }, void 0, false, {
            fileName: "[project]/app/shop/page.jsx",
            lineNumber: 152,
            columnNumber: 11
        }, this);
        $[18] = target;
        $[19] = t10;
    } else {
        t10 = $[19];
    }
    let t11;
    if ($[20] !== products) {
        t11 = products && products.length > 0 && products.map(_ShopProductsMap);
        $[20] = products;
        $[21] = t11;
    } else {
        t11 = $[21];
    }
    let t12;
    if ($[22] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "products-grid",
            children: t11
        }, void 0, false, {
            fileName: "[project]/app/shop/page.jsx",
            lineNumber: 168,
            columnNumber: 11
        }, this);
        $[22] = t11;
        $[23] = t12;
    } else {
        t12 = $[23];
    }
    let t13;
    if ($[24] !== t10 || $[25] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "shop-page",
            children: [
                t9,
                t10,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/app/shop/page.jsx",
            lineNumber: 176,
            columnNumber: 11
        }, this);
        $[24] = t10;
        $[25] = t12;
        $[26] = t13;
    } else {
        t13 = $[26];
    }
    return t13;
}
_s(Shop, "Q+W5VidwCt9qzv6NNeVdd7tdNes=");
_c = Shop;
function _ShopProductsMap(product, idx) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        id: product._id,
        title: product.title,
        price: product.price,
        salePrice: product.salePrice,
        image: product.images,
        disc: product.disc,
        category: product.category,
        size: product.size,
        colors: product.colors,
        stock: product.stock
    }, product._id, false, {
        fileName: "[project]/app/shop/page.jsx",
        lineNumber: 186,
        columnNumber: 10
    }, this);
}
function _ShopUseEffectProductsSort3(a_1, b_1) {
    return new Date(b_1.createdAt) - new Date(a_1.createdAt);
}
function _ShopUseEffectProductsSort2(a_0, b_0) {
    return b_0.salePrice - a_0.salePrice;
}
function _ShopUseEffectProductsSort(a, b) {
    return a.salePrice - b.salePrice;
}
function _ShopGetMatchedProductsAnonymous2(error_0) {
    return console.log(error_0.message);
}
function _ShopGetMatchedProductsAnonymous(res_0) {
    return res_0.json();
}
function _ShopGetProductsAnonymous2(error) {
    return console.log(error.message);
}
function _ShopGetProductsAnonymous(res) {
    return res.json();
}
var _c;
__turbopack_context__.k.register(_c, "Shop");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_98492c91._.js.map