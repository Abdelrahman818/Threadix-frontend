(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/ProductCard.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/config.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const ProductCard = (props)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(20);
    if ($[0] !== "c1b1e8b99c663f3a1b8ccbf45c6fc2270490b6658ffabc5d49458d2492945ceb") {
        for(let $i = 0; $i < 20; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c1b1e8b99c663f3a1b8ccbf45c6fc2270490b6658ffabc5d49458d2492945ceb";
    }
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    let t0;
    if ($[1] !== props.id || $[2] !== router) {
        t0 = ()=>{
            router.push(`/shop/item/${props.id}`);
        };
        $[1] = props.id;
        $[2] = router;
        $[3] = t0;
    } else {
        t0 = $[3];
    }
    const route = t0;
    const t1 = __TURBOPACK__imported__module__$5b$project$5d2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_BASE_URL"] + props.image[0];
    let t2;
    if ($[4] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "img-box",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: t1,
                alt: "Product"
            }, void 0, false, {
                fileName: "[project]/components/ProductCard.jsx",
                lineNumber: 30,
                columnNumber: 35
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/ProductCard.jsx",
            lineNumber: 30,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = t1;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    let t3;
    if ($[6] !== props.title) {
        t3 = props.title && props.title.charAt(0).toUpperCase() + props.title.slice(1);
        $[6] = props.title;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "name",
            children: t3
        }, void 0, false, {
            fileName: "[project]/components/ProductCard.jsx",
            lineNumber: 46,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = t3;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    let t5;
    if ($[10] !== props.salePrice) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "price",
            children: [
                props.salePrice,
                " LE"
            ]
        }, void 0, true, {
            fileName: "[project]/components/ProductCard.jsx",
            lineNumber: 54,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = props.salePrice;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    let t6;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "btn",
            children: "View"
        }, void 0, false, {
            fileName: "[project]/components/ProductCard.jsx",
            lineNumber: 62,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    let t7;
    if ($[13] !== t4 || $[14] !== t5) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "info",
            children: [
                t4,
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/components/ProductCard.jsx",
            lineNumber: 69,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = t4;
        $[14] = t5;
        $[15] = t7;
    } else {
        t7 = $[15];
    }
    let t8;
    if ($[16] !== route || $[17] !== t2 || $[18] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "product-card",
            onClick: route,
            children: [
                t2,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/components/ProductCard.jsx",
            lineNumber: 78,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[16] = route;
        $[17] = t2;
        $[18] = t7;
        $[19] = t8;
    } else {
        t8 = $[19];
    }
    return t8;
};
_s(ProductCard, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
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
"[project]/app/shop/[category]/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Shop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ProductCard.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Filters$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Filters.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/config.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function Shop() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(30);
    if ($[0] !== "42b190ede2721bde3e01750554fb323c5e768a447b8992fd2d4c4e911cd4ac18") {
        for(let $i = 0; $i < 30; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "42b190ede2721bde3e01750554fb323c5e768a447b8992fd2d4c4e911cd4ac18";
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
    const { category } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    let t1;
    if ($[2] !== category) {
        t1 = ({
            "Shop[getProducts]": ()=>{
                fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["END_POINT"].PRODUCTS}/${category}`, {
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
        $[2] = category;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const getProducts = t1;
    let t2;
    if ($[4] !== target) {
        t2 = ({
            "Shop[getMatchedProducts]": ()=>{
                fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["END_POINT"].SEARCH}/${target}`).then(_ShopGetMatchedProductsAnonymous).then({
                    "Shop[getMatchedProducts > (anonymous)()]": (json_0)=>{
                        setProducts(json_0.data);
                    }
                }["Shop[getMatchedProducts > (anonymous)()]"]).catch(_ShopGetMatchedProductsAnonymous2);
            }
        })["Shop[getMatchedProducts]"];
        $[4] = target;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    const getMatchedProducts = t2;
    let t3;
    if ($[6] !== getMatchedProducts || $[7] !== getProducts || $[8] !== target.length) {
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
        $[6] = getMatchedProducts;
        $[7] = getProducts;
        $[8] = target.length;
        $[9] = t3;
    } else {
        t3 = $[9];
    }
    let t4;
    if ($[10] !== target) {
        t4 = [
            target
        ];
        $[10] = target;
        $[11] = t4;
    } else {
        t4 = $[11];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    if ($[12] !== products || $[13] !== sort) {
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
        $[12] = products;
        $[13] = sort;
        $[14] = t5;
    } else {
        t5 = $[14];
    }
    let t6;
    if ($[15] !== sort) {
        t6 = [
            sort
        ];
        $[15] = sort;
        $[16] = t6;
    } else {
        t6 = $[16];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t5, t6);
    let t7;
    if ($[17] !== getProducts) {
        t7 = ({
            "Shop[useEffect()]": ()=>getProducts()
        })["Shop[useEffect()]"];
        $[17] = getProducts;
        $[18] = t7;
    } else {
        t7 = $[18];
    }
    let t8;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = [];
        $[19] = t8;
    } else {
        t8 = $[19];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t7, t8);
    let t9;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "shop-hero",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "title",
                    children: "Shop"
                }, void 0, false, {
                    fileName: "[project]/app/shop/[category]/page.jsx",
                    lineNumber: 155,
                    columnNumber: 41
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "subtitle",
                    children: "Explore our latest collections"
                }, void 0, false, {
                    fileName: "[project]/app/shop/[category]/page.jsx",
                    lineNumber: 155,
                    columnNumber: 72
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/shop/[category]/page.jsx",
            lineNumber: 155,
            columnNumber: 10
        }, this);
        $[20] = t9;
    } else {
        t9 = $[20];
    }
    let t10;
    if ($[21] !== target) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Filters$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            target: target,
            getTarget: setTarget,
            getSort: setSort
        }, void 0, false, {
            fileName: "[project]/app/shop/[category]/page.jsx",
            lineNumber: 162,
            columnNumber: 11
        }, this);
        $[21] = target;
        $[22] = t10;
    } else {
        t10 = $[22];
    }
    let t11;
    if ($[23] !== products) {
        t11 = products && products.length > 0 && products.map(_ShopProductsMap);
        $[23] = products;
        $[24] = t11;
    } else {
        t11 = $[24];
    }
    let t12;
    if ($[25] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "products-grid",
            children: t11
        }, void 0, false, {
            fileName: "[project]/app/shop/[category]/page.jsx",
            lineNumber: 178,
            columnNumber: 11
        }, this);
        $[25] = t11;
        $[26] = t12;
    } else {
        t12 = $[26];
    }
    let t13;
    if ($[27] !== t10 || $[28] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "shop-page",
            children: [
                t9,
                t10,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/app/shop/[category]/page.jsx",
            lineNumber: 186,
            columnNumber: 11
        }, this);
        $[27] = t10;
        $[28] = t12;
        $[29] = t13;
    } else {
        t13 = $[29];
    }
    return t13;
}
_s(Shop, "jYPxPds9JPIYq5PR9uqhmt2HSAw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = Shop;
function _ShopProductsMap(product, idx) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        id: product._id,
        title: product.title ? product.title.charAt(0).toUpperCase() + product.title.slice(1) : "",
        price: product.price,
        salePrice: product.salePrice,
        image: product.images,
        disc: product.disc,
        category: product.category ? product.category.charAt(0).toUpperCase() + product.category.slice(1) : "",
        size: product.size,
        colors: product.colors,
        stock: product.stock
    }, idx, false, {
        fileName: "[project]/app/shop/[category]/page.jsx",
        lineNumber: 196,
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
    return console.error(error_0.message);
}
function _ShopGetMatchedProductsAnonymous(res_0) {
    return res_0.json();
}
function _ShopGetProductsAnonymous2(error) {
    return console.error(error.message);
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

//# sourceMappingURL=_1a8cecf4._.js.map