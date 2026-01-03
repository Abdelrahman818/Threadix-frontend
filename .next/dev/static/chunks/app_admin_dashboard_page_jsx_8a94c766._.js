(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/admin/dashboard/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Dashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/config.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Dashboard() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(34);
    if ($[0] !== "e2016d654b7888d9e5e3e2c3d8eae2b989481c8804cfc20cb48e17ccd7734abc") {
        for(let $i = 0; $i < 34; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e2016d654b7888d9e5e3e2c3d8eae2b989481c8804cfc20cb48e17ccd7734abc";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            totalUsers: 0,
            totalOrders: 0,
            totalProducts: 0,
            totalRevenue: 0,
            latestOrders: []
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "Dashboard[useEffect()]": ()=>{
                fetch(__TURBOPACK__imported__module__$5b$project$5d2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["END_POINT"].ADMIN_STATS, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    credentials: "include"
                }).then(_DashboardUseEffectAnonymous).then({
                    "Dashboard[useEffect() > (anonymous)()]": (json)=>{
                        if (json.successful) {
                            setStats(json.data);
                        }
                    }
                }["Dashboard[useEffect() > (anonymous)()]"]).catch(_DashboardUseEffectAnonymous2).finally({
                    "Dashboard[useEffect() > (anonymous)()]": ()=>setLoading(false)
                }["Dashboard[useEffect() > (anonymous)()]"]);
            }
        })["Dashboard[useEffect()]"];
        t2 = [];
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    const formatDate = _DashboardFormatDate;
    let t3;
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "md:hidden mb-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center p-3 bg-white rounded-lg shadow",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "font-bold",
                    children: "Threadix Admin"
                }, void 0, false, {
                    fileName: "[project]/app/admin/dashboard/page.jsx",
                    lineNumber: 63,
                    columnNumber: 124
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/admin/dashboard/page.jsx",
                lineNumber: 63,
                columnNumber: 42
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/admin/dashboard/page.jsx",
            lineNumber: 63,
            columnNumber: 10
        }, this);
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-2xl font-bold mb-6",
            children: "Dashboard Overview"
        }, void 0, false, {
            fileName: "[project]/app/admin/dashboard/page.jsx",
            lineNumber: 64,
            columnNumber: 10
        }, this);
        $[4] = t3;
        $[5] = t4;
    } else {
        t3 = $[4];
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-gray-500",
            children: "Total Users"
        }, void 0, false, {
            fileName: "[project]/app/admin/dashboard/page.jsx",
            lineNumber: 73,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    const t6 = loading ? "..." : stats.totalUsers;
    let t7;
    if ($[7] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-5 rounded-xl shadow",
            children: [
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-3xl font-bold mt-2",
                    children: t6
                }, void 0, false, {
                    fileName: "[project]/app/admin/dashboard/page.jsx",
                    lineNumber: 81,
                    columnNumber: 62
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/dashboard/page.jsx",
            lineNumber: 81,
            columnNumber: 10
        }, this);
        $[7] = t6;
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-gray-500",
            children: "Total Orders"
        }, void 0, false, {
            fileName: "[project]/app/admin/dashboard/page.jsx",
            lineNumber: 89,
            columnNumber: 10
        }, this);
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    const t9 = loading ? "..." : stats.totalOrders;
    let t10;
    if ($[10] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-5 rounded-xl shadow",
            children: [
                t8,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-3xl font-bold mt-2",
                    children: t9
                }, void 0, false, {
                    fileName: "[project]/app/admin/dashboard/page.jsx",
                    lineNumber: 97,
                    columnNumber: 63
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/dashboard/page.jsx",
            lineNumber: 97,
            columnNumber: 11
        }, this);
        $[10] = t9;
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    let t11;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-gray-500",
            children: "Total Products"
        }, void 0, false, {
            fileName: "[project]/app/admin/dashboard/page.jsx",
            lineNumber: 105,
            columnNumber: 11
        }, this);
        $[12] = t11;
    } else {
        t11 = $[12];
    }
    const t12 = loading ? "..." : stats.totalProducts;
    let t13;
    if ($[13] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-5 rounded-xl shadow",
            children: [
                t11,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-3xl font-bold mt-2",
                    children: t12
                }, void 0, false, {
                    fileName: "[project]/app/admin/dashboard/page.jsx",
                    lineNumber: 113,
                    columnNumber: 64
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/dashboard/page.jsx",
            lineNumber: 113,
            columnNumber: 11
        }, this);
        $[13] = t12;
        $[14] = t13;
    } else {
        t13 = $[14];
    }
    let t14;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-gray-500",
            children: "Total Revenue"
        }, void 0, false, {
            fileName: "[project]/app/admin/dashboard/page.jsx",
            lineNumber: 121,
            columnNumber: 11
        }, this);
        $[15] = t14;
    } else {
        t14 = $[15];
    }
    let t15;
    if ($[16] !== loading || $[17] !== stats) {
        t15 = loading ? "..." : `${stats.totalRevenue.toFixed(2)}`;
        $[16] = loading;
        $[17] = stats;
        $[18] = t15;
    } else {
        t15 = $[18];
    }
    let t16;
    if ($[19] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-5 rounded-xl shadow",
            children: [
                t14,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-xl font-bold mt-2",
                    children: t15
                }, void 0, false, {
                    fileName: "[project]/app/admin/dashboard/page.jsx",
                    lineNumber: 137,
                    columnNumber: 64
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/dashboard/page.jsx",
            lineNumber: 137,
            columnNumber: 11
        }, this);
        $[19] = t15;
        $[20] = t16;
    } else {
        t16 = $[20];
    }
    let t17;
    if ($[21] !== t10 || $[22] !== t13 || $[23] !== t16 || $[24] !== t7) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6",
            children: [
                t7,
                t10,
                t13,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/dashboard/page.jsx",
            lineNumber: 145,
            columnNumber: 11
        }, this);
        $[21] = t10;
        $[22] = t13;
        $[23] = t16;
        $[24] = t7;
        $[25] = t17;
    } else {
        t17 = $[25];
    }
    let t18;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-xl font-semibold mb-4",
            children: "Latest Orders"
        }, void 0, false, {
            fileName: "[project]/app/admin/dashboard/page.jsx",
            lineNumber: 156,
            columnNumber: 11
        }, this);
        $[26] = t18;
    } else {
        t18 = $[26];
    }
    let t19;
    if ($[27] !== loading || $[28] !== stats) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-5 rounded-xl shadow mb-6 overflow-hidden",
            children: [
                t18,
                loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-gray-500 text-center py-4",
                    children: "Loading orders..."
                }, void 0, false, {
                    fileName: "[project]/app/admin/dashboard/page.jsx",
                    lineNumber: 163,
                    columnNumber: 96
                }, this) : stats.latestOrders && stats.latestOrders.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "overflow-x-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        className: "w-full text-left",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                className: "border-b",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "pb-3 font-semibold text-gray-600",
                                            children: "Customer"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/dashboard/page.jsx",
                                            lineNumber: 163,
                                            columnNumber: 325
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "pb-3 font-semibold text-gray-600",
                                            children: "Date"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/dashboard/page.jsx",
                                            lineNumber: 163,
                                            columnNumber: 387
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "pb-3 font-semibold text-gray-600",
                                            children: "Total"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/dashboard/page.jsx",
                                            lineNumber: 163,
                                            columnNumber: 445
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "pb-3 font-semibold text-gray-600",
                                            children: "Status"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/dashboard/page.jsx",
                                            lineNumber: 163,
                                            columnNumber: 504
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/dashboard/page.jsx",
                                    lineNumber: 163,
                                    columnNumber: 321
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/admin/dashboard/page.jsx",
                                lineNumber: 163,
                                columnNumber: 293
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                className: "divide-y",
                                children: stats.latestOrders.map({
                                    "Dashboard[stats.latestOrders.map()]": (order)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "hover:bg-gray-50 transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-4 text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-medium text-gray-900",
                                                            children: order.customerName || order.name || "N/A"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/dashboard/page.jsx",
                                                            lineNumber: 164,
                                                            columnNumber: 159
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs text-gray-500",
                                                            children: order.customerEmail || order.email
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/dashboard/page.jsx",
                                                            lineNumber: 164,
                                                            columnNumber: 251
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/dashboard/page.jsx",
                                                    lineNumber: 164,
                                                    columnNumber: 130
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-4 text-sm text-gray-600",
                                                    children: formatDate(order.createdAt)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/dashboard/page.jsx",
                                                    lineNumber: 164,
                                                    columnNumber: 337
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-4 text-sm font-semibold text-gray-900",
                                                    children: [
                                                        order.totalPrice?.toFixed(2) || "0.00",
                                                        " EGP"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/dashboard/page.jsx",
                                                    lineNumber: 164,
                                                    columnNumber: 414
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `px-2 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider ${order.orderStatus === "completed" ? "bg-green-100 text-green-700" : order.orderStatus === "in delivery" ? "bg-blue-100 text-blue-700" : order.orderStatus === "cancelled" ? "bg-red-100 text-red-700" : "bg-yellow-100 text-yellow-700"}`,
                                                        children: order.orderStatus
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/dashboard/page.jsx",
                                                        lineNumber: 164,
                                                        columnNumber: 541
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/dashboard/page.jsx",
                                                    lineNumber: 164,
                                                    columnNumber: 520
                                                }, this)
                                            ]
                                        }, order._id, true, {
                                            fileName: "[project]/app/admin/dashboard/page.jsx",
                                            lineNumber: 164,
                                            columnNumber: 63
                                        }, this)
                                }["Dashboard[stats.latestOrders.map()]"])
                            }, void 0, false, {
                                fileName: "[project]/app/admin/dashboard/page.jsx",
                                lineNumber: 163,
                                columnNumber: 577
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/dashboard/page.jsx",
                        lineNumber: 163,
                        columnNumber: 257
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/admin/dashboard/page.jsx",
                    lineNumber: 163,
                    columnNumber: 224
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-gray-500 text-center py-4",
                    children: "No orders yet."
                }, void 0, false, {
                    fileName: "[project]/app/admin/dashboard/page.jsx",
                    lineNumber: 165,
                    columnNumber: 80
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/dashboard/page.jsx",
            lineNumber: 163,
            columnNumber: 11
        }, this);
        $[27] = loading;
        $[28] = stats;
        $[29] = t19;
    } else {
        t19 = $[29];
    }
    let t20;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-5 rounded-xl shadow mb-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-xl font-semibold mb-4",
                    children: "Best Selling Products"
                }, void 0, false, {
                    fileName: "[project]/app/admin/dashboard/page.jsx",
                    lineNumber: 174,
                    columnNumber: 64
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-gray-500 text-center py-4 italic",
                    children: "Available in future updates."
                }, void 0, false, {
                    fileName: "[project]/app/admin/dashboard/page.jsx",
                    lineNumber: 174,
                    columnNumber: 135
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/dashboard/page.jsx",
            lineNumber: 174,
            columnNumber: 11
        }, this);
        $[30] = t20;
    } else {
        t20 = $[30];
    }
    let t21;
    if ($[31] !== t17 || $[32] !== t19) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 p-4",
            children: [
                t3,
                t4,
                t17,
                t19,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/dashboard/page.jsx",
            lineNumber: 181,
            columnNumber: 11
        }, this);
        $[31] = t17;
        $[32] = t19;
        $[33] = t21;
    } else {
        t21 = $[33];
    }
    return t21;
}
_s(Dashboard, "XB5hyayBOmMMYswvmv6Vh+qFJ4E=");
_c = Dashboard;
function _DashboardFormatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day} / ${month} / ${year}`;
}
function _DashboardUseEffectAnonymous2(err) {
    return console.error("Error fetching stats:", err);
}
function _DashboardUseEffectAnonymous(res) {
    return res.json();
}
var _c;
__turbopack_context__.k.register(_c, "Dashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_admin_dashboard_page_jsx_8a94c766._.js.map