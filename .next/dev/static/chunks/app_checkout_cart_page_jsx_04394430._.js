(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/checkout/cart/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CartPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minus.js [app-client] (ecmascript) <export default as Minus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function CartPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "eee2256f57ad4f994bd32521a2261195e6373f48cd2014bfcc2ca0cbd8c6bc74") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "eee2256f57ad4f994bd32521a2261195e6373f48cd2014bfcc2ca0cbd8c6bc74";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [
            {
                id: 1,
                name: "Threadix Classic Shirt",
                price: 850,
                quantity: 1,
                image: "/products/shirt.jpg"
            },
            {
                id: 2,
                name: "Threadix Linen Pants",
                price: 1200,
                quantity: 2,
                image: "/products/pants.jpg"
            }
        ];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [cartItems, setCartItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "CartPage[increaseQty]": (id)=>{
                setCartItems({
                    "CartPage[increaseQty > setCartItems()]": (items)=>items.map({
                            "CartPage[increaseQty > setCartItems() > items.map()]": (item)=>item.id === id ? {
                                    ...item,
                                    quantity: item.quantity + 1
                                } : item
                        }["CartPage[increaseQty > setCartItems() > items.map()]"])
                }["CartPage[increaseQty > setCartItems()]"]);
            }
        })["CartPage[increaseQty]"];
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const increaseQty = t1;
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "CartPage[decreaseQty]": (id_0)=>{
                setCartItems({
                    "CartPage[decreaseQty > setCartItems()]": (items_0)=>items_0.map({
                            "CartPage[decreaseQty > setCartItems() > items_0.map()]": (item_0)=>item_0.id === id_0 && item_0.quantity > 1 ? {
                                    ...item_0,
                                    quantity: item_0.quantity - 1
                                } : item_0
                        }["CartPage[decreaseQty > setCartItems() > items_0.map()]"])
                }["CartPage[decreaseQty > setCartItems()]"]);
            }
        })["CartPage[decreaseQty]"];
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const decreaseQty = t2;
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "CartPage[removeItem]": (id_1)=>{
                setCartItems({
                    "CartPage[removeItem > setCartItems()]": (items_1)=>items_1.filter({
                            "CartPage[removeItem > setCartItems() > items_1.filter()]": (item_1)=>item_1.id !== id_1
                        }["CartPage[removeItem > setCartItems() > items_1.filter()]"])
                }["CartPage[removeItem > setCartItems()]"]);
            }
        })["CartPage[removeItem]"];
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const removeItem = t3;
    let t4;
    if ($[5] !== cartItems) {
        t4 = cartItems.reduce(_CartPageCartItemsReduce, 0);
        $[5] = cartItems;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    const subtotal = t4;
    let t5;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            children: "Your Cart"
        }, void 0, false, {
            fileName: "[project]/app/checkout/cart/page.jsx",
            lineNumber: 102,
            columnNumber: 10
        }, this);
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] !== cartItems || $[9] !== subtotal) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "cart-page",
            children: [
                t5,
                cartItems.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "empty-cart",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Your cart is empty."
                        }, void 0, false, {
                            fileName: "[project]/app/checkout/cart/page.jsx",
                            lineNumber: 109,
                            columnNumber: 99
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/shop",
                            children: "Continue Shopping"
                        }, void 0, false, {
                            fileName: "[project]/app/checkout/cart/page.jsx",
                            lineNumber: 109,
                            columnNumber: 125
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/checkout/cart/page.jsx",
                    lineNumber: 109,
                    columnNumber: 71
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "cart-layout",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "cart-items",
                            children: cartItems.map({
                                "CartPage[cartItems.map()]": (item_3)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "cart-item",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: item_3.image,
                                                alt: item_3.name,
                                                width: 120,
                                                height: 120
                                            }, void 0, false, {
                                                fileName: "[project]/app/checkout/cart/page.jsx",
                                                lineNumber: 110,
                                                columnNumber: 95
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "item-info",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        children: item_3.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/checkout/cart/page.jsx",
                                                        lineNumber: 110,
                                                        columnNumber: 193
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "price",
                                                        children: [
                                                            item_3.price,
                                                            " EGP"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/checkout/cart/page.jsx",
                                                        lineNumber: 110,
                                                        columnNumber: 215
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "quantity",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: {
                                                                    "CartPage[cartItems.map() > <button>.onClick]": ()=>decreaseQty(item_3.id)
                                                                }["CartPage[cartItems.map() > <button>.onClick]"],
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                                                                    size: 16
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/checkout/cart/page.jsx",
                                                                    lineNumber: 112,
                                                                    columnNumber: 70
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/checkout/cart/page.jsx",
                                                                lineNumber: 110,
                                                                columnNumber: 284
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: item_3.quantity
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/checkout/cart/page.jsx",
                                                                lineNumber: 112,
                                                                columnNumber: 98
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: {
                                                                    "CartPage[cartItems.map() > <button>.onClick]": ()=>increaseQty(item_3.id)
                                                                }["CartPage[cartItems.map() > <button>.onClick]"],
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                    size: 16
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/checkout/cart/page.jsx",
                                                                    lineNumber: 114,
                                                                    columnNumber: 70
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/checkout/cart/page.jsx",
                                                                lineNumber: 112,
                                                                columnNumber: 128
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/checkout/cart/page.jsx",
                                                        lineNumber: 110,
                                                        columnNumber: 258
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/checkout/cart/page.jsx",
                                                lineNumber: 110,
                                                columnNumber: 166
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "remove",
                                                onClick: {
                                                    "CartPage[cartItems.map() > <button>.onClick]": ()=>removeItem(item_3.id)
                                                }["CartPage[cartItems.map() > <button>.onClick]"],
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/app/checkout/cart/page.jsx",
                                                    lineNumber: 116,
                                                    columnNumber: 66
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/checkout/cart/page.jsx",
                                                lineNumber: 114,
                                                columnNumber: 109
                                            }, this)
                                        ]
                                    }, item_3.id, true, {
                                        fileName: "[project]/app/checkout/cart/page.jsx",
                                        lineNumber: 110,
                                        columnNumber: 52
                                    }, this)
                            }["CartPage[cartItems.map()]"])
                        }, void 0, false, {
                            fileName: "[project]/app/checkout/cart/page.jsx",
                            lineNumber: 109,
                            columnNumber: 206
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "summary",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: "Order Summary"
                                }, void 0, false, {
                                    fileName: "[project]/app/checkout/cart/page.jsx",
                                    lineNumber: 117,
                                    columnNumber: 74
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "row",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Subtotal"
                                        }, void 0, false, {
                                            fileName: "[project]/app/checkout/cart/page.jsx",
                                            lineNumber: 117,
                                            columnNumber: 117
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                subtotal,
                                                " EGP"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/checkout/cart/page.jsx",
                                            lineNumber: 117,
                                            columnNumber: 138
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/checkout/cart/page.jsx",
                                    lineNumber: 117,
                                    columnNumber: 96
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "row",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Shipping"
                                        }, void 0, false, {
                                            fileName: "[project]/app/checkout/cart/page.jsx",
                                            lineNumber: 117,
                                            columnNumber: 192
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Free"
                                        }, void 0, false, {
                                            fileName: "[project]/app/checkout/cart/page.jsx",
                                            lineNumber: 117,
                                            columnNumber: 213
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/checkout/cart/page.jsx",
                                    lineNumber: 117,
                                    columnNumber: 171
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "row total",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Total"
                                        }, void 0, false, {
                                            fileName: "[project]/app/checkout/cart/page.jsx",
                                            lineNumber: 117,
                                            columnNumber: 263
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                subtotal,
                                                " EGP"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/checkout/cart/page.jsx",
                                            lineNumber: 117,
                                            columnNumber: 281
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/checkout/cart/page.jsx",
                                    lineNumber: 117,
                                    columnNumber: 236
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "checkout-btn",
                                    children: "Proceed to Checkout"
                                }, void 0, false, {
                                    fileName: "[project]/app/checkout/cart/page.jsx",
                                    lineNumber: 117,
                                    columnNumber: 314
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/checkout/cart/page.jsx",
                            lineNumber: 117,
                            columnNumber: 49
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/checkout/cart/page.jsx",
                    lineNumber: 109,
                    columnNumber: 177
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/checkout/cart/page.jsx",
            lineNumber: 109,
            columnNumber: 10
        }, this);
        $[8] = cartItems;
        $[9] = subtotal;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    return t6;
}
_s(CartPage, "/7U6xyTto/3kaefTIGCNIy0Z+JE=");
_c = CartPage;
function _CartPageCartItemsReduce(acc, item_2) {
    return acc + item_2.price * item_2.quantity;
}
var _c;
__turbopack_context__.k.register(_c, "CartPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_checkout_cart_page_jsx_04394430._.js.map