(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/config.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "API_BASE_URL",
    ()=>API_BASE_URL,
    "END_POINT",
    ()=>END_POINT
]);
const API_BASE_URL = "http://localhost:8080";
const END_POINT = {
    LOGIN: `${API_BASE_URL}/api/auth/login`,
    SIGNUP: `${API_BASE_URL}/api/auth/signup`,
    LOGOUT: `${API_BASE_URL}/api/auth/logout`,
    VERIFY_USER: `${API_BASE_URL}/api/auth/verifyUser`,
    VERIFY_TOKEN: `${API_BASE_URL}/api/auth/verifyToken`,
    GET_CURRENT_USER: `${API_BASE_URL}/api/auth/getCurrentUser`,
    PRODUCTS: `${API_BASE_URL}/api/products`,
    CATEGORIES: (id)=>`${API_BASE_URL}/api/categories${id ? '/' + id : ''}`,
    GET_PRODUCT: (id)=>`${API_BASE_URL}/api/products/item/${id}`,
    SEARCH: (route)=>`${API_BASE_URL}/api/${route}/search`,
    FILTER: (filter)=>`${API_BASE_URL}/api/filter/${filter}`,
    CONTACT: `${API_BASE_URL}/api/contact`,
    USERS: `${API_BASE_URL}/api/users`,
    GET_ROLE: `${API_BASE_URL}/api/auth/getRole`,
    GET_FEATURED: `${API_BASE_URL}/api/products/featured`,
    CART: (id)=>`${API_BASE_URL}/api/cart${id ? '/' + id : ''}`
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/checkout/confirm/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Checkout
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
;
// Egyptian Governorates
const EGYPTIAN_GOVERNORATES = [
    'Cairo',
    'Giza',
    'Alexandria',
    'Dakahlia',
    'Sharqia',
    'Qalyubia',
    'Kafr El Sheikh',
    'Gharbia',
    'Monufia',
    'Beheira',
    'Ismailia',
    'Port Said',
    'Suez',
    'North Sinai',
    'South Sinai',
    'Damietta',
    'New Valley',
    'Matruh',
    'Qena',
    'Sohag',
    'Aswan',
    'Luxor',
    'Red Sea',
    'Beni Suef',
    'Faiyum',
    'Minya',
    'Asyut'
];
function Checkout() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(72);
    if ($[0] !== "1d2a778fe1292dc285b550cb11ea75abf6c8e288d3aa1a95c6e8bb1af4567a3c") {
        for(let $i = 0; $i < 72; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1d2a778fe1292dc285b550cb11ea75abf6c8e288d3aa1a95c6e8bb1af4567a3c";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            fullName: "",
            email: "",
            phone: "",
            city: "",
            government: "",
            detailedAddress: ""
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [govSearchTerm, setGovSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showGovDropdown, setShowGovDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const govDropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "Checkout[useEffect()]": ()=>{
                fetch(__TURBOPACK__imported__module__$5b$project$5d2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["END_POINT"].GET_CURRENT_USER, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    credentials: "include"
                }).then(_CheckoutUseEffectAnonymous).then({
                    "Checkout[useEffect() > (anonymous)()]": (json)=>{
                        if (json.successful && json.data) {
                            const user = json.data;
                            const government = user.government || "";
                            setFormData({
                                "Checkout[useEffect() > (anonymous)() > setFormData()]": (prevData)=>({
                                        ...prevData,
                                        fullName: user.name || "",
                                        email: user.email || "",
                                        phone: user.phone || "",
                                        government,
                                        detailedAddress: user.address || ""
                                    })
                            }["Checkout[useEffect() > (anonymous)() > setFormData()]"]);
                            setGovSearchTerm(government);
                        }
                    }
                }["Checkout[useEffect() > (anonymous)()]"]).catch(_CheckoutUseEffectAnonymous2).finally({
                    "Checkout[useEffect() > (anonymous)()]": ()=>{
                        setIsLoading(false);
                    }
                }["Checkout[useEffect() > (anonymous)()]"]);
            }
        })["Checkout[useEffect()]"];
        t2 = [];
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "Checkout[useEffect()]": ()=>{
                const handleClickOutside = {
                    "Checkout[useEffect() > handleClickOutside]": (event)=>{
                        if (govDropdownRef.current && !govDropdownRef.current.contains(event.target)) {
                            setShowGovDropdown(false);
                        }
                    }
                }["Checkout[useEffect() > handleClickOutside]"];
                document.addEventListener("mousedown", handleClickOutside);
                return ()=>{
                    document.removeEventListener("mousedown", handleClickOutside);
                };
            }
        })["Checkout[useEffect()]"];
        t4 = [];
        $[4] = t3;
        $[5] = t4;
    } else {
        t3 = $[4];
        t4 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = ({
            "Checkout[handleInputChange]": (e)=>{
                const { name, value } = e.target;
                setFormData({
                    "Checkout[handleInputChange > setFormData()]": (prevData_0)=>({
                            ...prevData_0,
                            [name]: value
                        })
                }["Checkout[handleInputChange > setFormData()]"]);
            }
        })["Checkout[handleInputChange]"];
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    const handleInputChange = t5;
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = ({
            "Checkout[handleGovSearch]": (e_0)=>{
                const value_0 = e_0.target.value;
                setGovSearchTerm(value_0);
                setShowGovDropdown(true);
                if (value_0 && EGYPTIAN_GOVERNORATES.includes(value_0)) {
                    setFormData({
                        "Checkout[handleGovSearch > setFormData()]": (prevData_1)=>({
                                ...prevData_1,
                                government: value_0
                            })
                    }["Checkout[handleGovSearch > setFormData()]"]);
                } else {
                    if (!value_0) {
                        setFormData(_CheckoutHandleGovSearchSetFormData);
                    }
                }
            }
        })["Checkout[handleGovSearch]"];
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    const handleGovSearch = t6;
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = ({
            "Checkout[handleGovSelect]": (governorate)=>{
                setFormData({
                    "Checkout[handleGovSelect > setFormData()]": (prevData_3)=>({
                            ...prevData_3,
                            government: governorate
                        })
                }["Checkout[handleGovSelect > setFormData()]"]);
                setGovSearchTerm(governorate);
                setShowGovDropdown(false);
            }
        })["Checkout[handleGovSelect]"];
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    const handleGovSelect = t7;
    let t10;
    let t11;
    let t12;
    let t13;
    let t14;
    let t15;
    let t16;
    let t17;
    let t8;
    let t9;
    if ($[9] !== formData.email || $[10] !== formData.fullName || $[11] !== formData.phone || $[12] !== govSearchTerm || $[13] !== showGovDropdown) {
        let t18;
        if ($[24] !== govSearchTerm) {
            t18 = ({
                "Checkout[EGYPTIAN_GOVERNORATES.filter()]": (gov)=>gov.toLowerCase().includes(govSearchTerm.toLowerCase())
            })["Checkout[EGYPTIAN_GOVERNORATES.filter()]"];
            $[24] = govSearchTerm;
            $[25] = t18;
        } else {
            t18 = $[25];
        }
        const filteredGovernorates = EGYPTIAN_GOVERNORATES.filter(t18);
        t15 = "checkout-page";
        if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
            t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "title",
                children: "Checkout"
            }, void 0, false, {
                fileName: "[project]/app/checkout/confirm/page.jsx",
                lineNumber: 197,
                columnNumber: 13
            }, this);
            $[26] = t16;
        } else {
            t16 = $[26];
        }
        let t19;
        if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
            t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "section-title",
                children: "Customer Information"
            }, void 0, false, {
                fileName: "[project]/app/checkout/confirm/page.jsx",
                lineNumber: 204,
                columnNumber: 13
            }, this);
            $[27] = t19;
        } else {
            t19 = $[27];
        }
        let t20;
        if ($[28] !== formData.fullName) {
            t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                name: "fullName",
                placeholder: "Full Name",
                value: formData.fullName,
                onChange: handleInputChange
            }, void 0, false, {
                fileName: "[project]/app/checkout/confirm/page.jsx",
                lineNumber: 211,
                columnNumber: 13
            }, this);
            $[28] = formData.fullName;
            $[29] = t20;
        } else {
            t20 = $[29];
        }
        let t21;
        if ($[30] !== formData.email) {
            t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "email",
                name: "email",
                placeholder: "Email Address",
                value: formData.email,
                onChange: handleInputChange
            }, void 0, false, {
                fileName: "[project]/app/checkout/confirm/page.jsx",
                lineNumber: 219,
                columnNumber: 13
            }, this);
            $[30] = formData.email;
            $[31] = t21;
        } else {
            t21 = $[31];
        }
        let t22;
        if ($[32] !== formData.phone) {
            t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "tel",
                name: "phone",
                placeholder: "Phone Number",
                value: formData.phone,
                onChange: handleInputChange
            }, void 0, false, {
                fileName: "[project]/app/checkout/confirm/page.jsx",
                lineNumber: 227,
                columnNumber: 13
            }, this);
            $[32] = formData.phone;
            $[33] = t22;
        } else {
            t22 = $[33];
        }
        if ($[34] !== t20 || $[35] !== t21 || $[36] !== t22) {
            t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "section",
                children: [
                    t19,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inputs-grid",
                        children: [
                            t20,
                            t21,
                            t22
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/checkout/confirm/page.jsx",
                        lineNumber: 234,
                        columnNumber: 47
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/checkout/confirm/page.jsx",
                lineNumber: 234,
                columnNumber: 13
            }, this);
            $[34] = t20;
            $[35] = t21;
            $[36] = t22;
            $[37] = t17;
        } else {
            t17 = $[37];
        }
        t13 = "section";
        if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
            t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "section-title",
                children: "Shipping Address"
            }, void 0, false, {
                fileName: "[project]/app/checkout/confirm/page.jsx",
                lineNumber: 244,
                columnNumber: 13
            }, this);
            $[38] = t14;
        } else {
            t14 = $[38];
        }
        t12 = "inputs-grid";
        t8 = "gov-select-wrapper";
        t9 = govDropdownRef;
        let t23;
        if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
            t23 = ({
                "Checkout[<input>.onFocus]": ()=>setShowGovDropdown(true)
            })["Checkout[<input>.onFocus]"];
            $[39] = t23;
        } else {
            t23 = $[39];
        }
        if ($[40] !== govSearchTerm) {
            t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                name: "government",
                placeholder: "Search for your Governorate",
                value: govSearchTerm,
                onChange: handleGovSearch,
                onFocus: t23,
                className: "gov-search-input"
            }, void 0, false, {
                fileName: "[project]/app/checkout/confirm/page.jsx",
                lineNumber: 262,
                columnNumber: 13
            }, this);
            $[40] = govSearchTerm;
            $[41] = t10;
        } else {
            t10 = $[41];
        }
        t11 = showGovDropdown && filteredGovernorates.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "gov-dropdown",
            children: filteredGovernorates.map({
                "Checkout[filteredGovernorates.map()]": (governorate_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "gov-option",
                        onClick: {
                            "Checkout[filteredGovernorates.map() > <div>.onClick]": ()=>handleGovSelect(governorate_0)
                        }["Checkout[filteredGovernorates.map() > <div>.onClick]"],
                        children: governorate_0
                    }, governorate_0, false, {
                        fileName: "[project]/app/checkout/confirm/page.jsx",
                        lineNumber: 269,
                        columnNumber: 66
                    }, this)
            }["Checkout[filteredGovernorates.map()]"])
        }, void 0, false, {
            fileName: "[project]/app/checkout/confirm/page.jsx",
            lineNumber: 268,
            columnNumber: 65
        }, this);
        $[9] = formData.email;
        $[10] = formData.fullName;
        $[11] = formData.phone;
        $[12] = govSearchTerm;
        $[13] = showGovDropdown;
        $[14] = t10;
        $[15] = t11;
        $[16] = t12;
        $[17] = t13;
        $[18] = t14;
        $[19] = t15;
        $[20] = t16;
        $[21] = t17;
        $[22] = t8;
        $[23] = t9;
    } else {
        t10 = $[14];
        t11 = $[15];
        t12 = $[16];
        t13 = $[17];
        t14 = $[18];
        t15 = $[19];
        t16 = $[20];
        t17 = $[21];
        t8 = $[22];
        t9 = $[23];
    }
    let t18;
    if ($[42] !== t10 || $[43] !== t11 || $[44] !== t8 || $[45] !== t9) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t8,
            ref: t9,
            children: [
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/app/checkout/confirm/page.jsx",
            lineNumber: 302,
            columnNumber: 11
        }, this);
        $[42] = t10;
        $[43] = t11;
        $[44] = t8;
        $[45] = t9;
        $[46] = t18;
    } else {
        t18 = $[46];
    }
    let t19;
    if ($[47] !== formData.city) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "text",
            name: "city",
            placeholder: "City",
            value: formData.city,
            onChange: handleInputChange
        }, void 0, false, {
            fileName: "[project]/app/checkout/confirm/page.jsx",
            lineNumber: 313,
            columnNumber: 11
        }, this);
        $[47] = formData.city;
        $[48] = t19;
    } else {
        t19 = $[48];
    }
    let t20;
    if ($[49] !== t12 || $[50] !== t18 || $[51] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t12,
            children: [
                t18,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/app/checkout/confirm/page.jsx",
            lineNumber: 321,
            columnNumber: 11
        }, this);
        $[49] = t12;
        $[50] = t18;
        $[51] = t19;
        $[52] = t20;
    } else {
        t20 = $[52];
    }
    let t21;
    if ($[53] !== formData.detailedAddress) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
            name: "detailedAddress",
            placeholder: "Detailed Address (Street, Building, Apartment, etc.)",
            value: formData.detailedAddress,
            onChange: handleInputChange,
            className: "detailed-address-textarea"
        }, void 0, false, {
            fileName: "[project]/app/checkout/confirm/page.jsx",
            lineNumber: 331,
            columnNumber: 11
        }, this);
        $[53] = formData.detailedAddress;
        $[54] = t21;
    } else {
        t21 = $[54];
    }
    let t22;
    if ($[55] !== t13 || $[56] !== t14 || $[57] !== t20 || $[58] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: t13,
            children: [
                t14,
                t20,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/app/checkout/confirm/page.jsx",
            lineNumber: 339,
            columnNumber: 11
        }, this);
        $[55] = t13;
        $[56] = t14;
        $[57] = t20;
        $[58] = t21;
        $[59] = t22;
    } else {
        t22 = $[59];
    }
    let t23;
    if ($[60] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "section-title",
            children: "Payment Method"
        }, void 0, false, {
            fileName: "[project]/app/checkout/confirm/page.jsx",
            lineNumber: 350,
            columnNumber: 11
        }, this);
        $[60] = t23;
    } else {
        t23 = $[60];
    }
    let t24;
    if ($[61] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "section",
            children: [
                t23,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "payment-box",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "radio",
                                    name: "payment",
                                    defaultChecked: true
                                }, void 0, false, {
                                    fileName: "[project]/app/checkout/confirm/page.jsx",
                                    lineNumber: 357,
                                    columnNumber: 81
                                }, this),
                                "Cash on Delivery"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/checkout/confirm/page.jsx",
                            lineNumber: 357,
                            columnNumber: 74
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "radio",
                                    name: "payment"
                                }, void 0, false, {
                                    fileName: "[project]/app/checkout/confirm/page.jsx",
                                    lineNumber: 357,
                                    columnNumber: 171
                                }, this),
                                "Credit Card (Soon)"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/checkout/confirm/page.jsx",
                            lineNumber: 357,
                            columnNumber: 164
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/checkout/confirm/page.jsx",
                    lineNumber: 357,
                    columnNumber: 45
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/checkout/confirm/page.jsx",
            lineNumber: 357,
            columnNumber: 11
        }, this);
        $[61] = t24;
    } else {
        t24 = $[61];
    }
    let t25;
    if ($[62] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "section-title",
            children: "Order Summary"
        }, void 0, false, {
            fileName: "[project]/app/checkout/confirm/page.jsx",
            lineNumber: 364,
            columnNumber: 11
        }, this);
        $[62] = t25;
    } else {
        t25 = $[62];
    }
    let t26;
    if ($[63] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "summary-item",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Subtotal"
                }, void 0, false, {
                    fileName: "[project]/app/checkout/confirm/page.jsx",
                    lineNumber: 371,
                    columnNumber: 41
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "$120.00"
                }, void 0, false, {
                    fileName: "[project]/app/checkout/confirm/page.jsx",
                    lineNumber: 371,
                    columnNumber: 62
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/checkout/confirm/page.jsx",
            lineNumber: 371,
            columnNumber: 11
        }, this);
        $[63] = t26;
    } else {
        t26 = $[63];
    }
    let t27;
    if ($[64] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "summary-item",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Shipping"
                }, void 0, false, {
                    fileName: "[project]/app/checkout/confirm/page.jsx",
                    lineNumber: 378,
                    columnNumber: 41
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "$5.00"
                }, void 0, false, {
                    fileName: "[project]/app/checkout/confirm/page.jsx",
                    lineNumber: 378,
                    columnNumber: 62
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/checkout/confirm/page.jsx",
            lineNumber: 378,
            columnNumber: 11
        }, this);
        $[64] = t27;
    } else {
        t27 = $[64];
    }
    let t28;
    let t29;
    if ($[65] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "section summary",
            children: [
                t25,
                t26,
                t27,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "summary-total",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Total"
                        }, void 0, false, {
                            fileName: "[project]/app/checkout/confirm/page.jsx",
                            lineNumber: 386,
                            columnNumber: 94
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "$125.00"
                        }, void 0, false, {
                            fileName: "[project]/app/checkout/confirm/page.jsx",
                            lineNumber: 386,
                            columnNumber: 112
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/checkout/confirm/page.jsx",
                    lineNumber: 386,
                    columnNumber: 63
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/checkout/confirm/page.jsx",
            lineNumber: 386,
            columnNumber: 11
        }, this);
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "place-order-btn",
            children: "Place Order"
        }, void 0, false, {
            fileName: "[project]/app/checkout/confirm/page.jsx",
            lineNumber: 387,
            columnNumber: 11
        }, this);
        $[65] = t28;
        $[66] = t29;
    } else {
        t28 = $[65];
        t29 = $[66];
    }
    let t30;
    if ($[67] !== t15 || $[68] !== t16 || $[69] !== t17 || $[70] !== t22) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t15,
            children: [
                t16,
                t17,
                t22,
                t24,
                t28,
                t29
            ]
        }, void 0, true, {
            fileName: "[project]/app/checkout/confirm/page.jsx",
            lineNumber: 396,
            columnNumber: 11
        }, this);
        $[67] = t15;
        $[68] = t16;
        $[69] = t17;
        $[70] = t22;
        $[71] = t30;
    } else {
        t30 = $[71];
    }
    return t30;
}
_s(Checkout, "xeLo3C7wvsRPPwSnnmtMD60q0tE=");
_c = Checkout;
function _CheckoutHandleGovSearchSetFormData(prevData_2) {
    return {
        ...prevData_2,
        government: ""
    };
}
function _CheckoutUseEffectAnonymous2(error) {
    console.log("Error fetching user data:", error.message);
}
function _CheckoutUseEffectAnonymous(res) {
    return res.json();
}
var _c;
__turbopack_context__.k.register(_c, "Checkout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-compiler-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-compiler-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    var ReactSharedInternals = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)").__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    exports.c = function(size) {
        var dispatcher = ReactSharedInternals.H;
        null === dispatcher && console.error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.");
        return dispatcher.useMemoCache(size);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-compiler-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=_73df4784._.js.map