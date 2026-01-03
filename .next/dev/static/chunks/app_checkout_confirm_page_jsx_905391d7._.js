(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/checkout/confirm/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Checkout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/config.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$UserContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/UserContext.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/styles/checkout.css'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
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
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        fullName: '',
        email: '',
        phone: '',
        city: '',
        government: '',
        detailedAddress: ''
    });
    const [shippingCost, setShippingCost] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [shippingMessage, setShippingMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('will be determined in the next step');
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [notification, setNotification] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [cartItems, setCartItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [subTotal, setSubTotal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isPlacingOrder, setIsPlacingOrder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Modal State
    const [showConfirmModal, setShowConfirmModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const initialUserData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Governorate Search State
    const [govSearchTerm, setGovSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [showGovDropdown, setShowGovDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const govDropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const calculateShipping = (gov)=>{
        if (!gov) {
            setShippingCost(0);
            setShippingMessage('');
            return;
        }
        const normalizedGov = gov.toLowerCase().trim();
        if (normalizedGov === 'cairo' || normalizedGov === 'giza') {
            setShippingCost(50);
            setShippingMessage('');
        } else if (normalizedGov === 'qalyubia' || normalizedGov === 'qalubia') {
            setShippingCost(75);
            setShippingMessage('');
        } else if (normalizedGov === '') {
            setShippingCost(0);
            setShippingMessage('will be determined in the next step');
        } else {
            setShippingCost(0);
            setShippingMessage('Arrange via external courier');
        }
    };
    const handleInputChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prevData)=>({
                ...prevData,
                [name]: value
            }));
    };
    const handleGovSearch = (e_0)=>{
        const value_0 = e_0.target.value;
        setGovSearchTerm(value_0);
        setShowGovDropdown(true);
        if (value_0 && EGYPTIAN_GOVERNORATES.includes(value_0)) {
            setFormData((prevData_0)=>({
                    ...prevData_0,
                    government: value_0
                }));
            calculateShipping(value_0);
        } else if (!value_0) {
            setFormData((prevData_1)=>({
                    ...prevData_1,
                    government: ''
                }));
            calculateShipping('');
        }
    };
    const handleGovSelect = (governorate)=>{
        setFormData((prevData_2)=>({
                ...prevData_2,
                government: governorate
            }));
        setGovSearchTerm(governorate);
        setShowGovDropdown(false);
        calculateShipping(governorate);
    };
    const validatePhoneOnly = ()=>{
        if (!formData.phone.trim()) {
            setErrors({
                phone: 'Phone Number is required'
            });
            return false;
        }
        setErrors({});
        return true;
    };
    const validateFullForm = ()=>{
        const newErrors = {};
        if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        if (!formData.phone.trim()) newErrors.phone = 'Phone Number is required';
        if (!formData.city.trim()) newErrors.city = 'City is required';
        if (!formData.government.trim()) newErrors.government = 'Governorate is required';
        if (!formData.detailedAddress.trim()) newErrors.detailedAddress = 'Address is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const showNotification = (type, message)=>{
        setNotification({
            type,
            message
        });
        setTimeout(()=>setNotification(null), 4000);
    };
    const handleProceedToConfirmation = (e_1)=>{
        e_1.preventDefault();
        if (validatePhoneOnly()) {
            setShowConfirmModal(true);
        }
    };
    const confirmOrder = async ()=>{
        if (!validateFullForm()) {
            showNotification('error', 'Please fill in all details correctly.');
            return;
        }
        setIsPlacingOrder(true);
        try {
            // 1. Fetch current cart items to calculate real total and get items
            const cartRes = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["END_POINT"].CART(''), {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            });
            const cartJson = await cartRes.json();
            if (!cartRes.ok || !cartJson.successful || !cartJson.data || cartJson.data.length === 0) {
                showNotification('error', 'Your cart is empty or could not be retrieved.');
                setIsPlacingOrder(false);
                return;
            }
            const cartItems_0 = cartJson.data;
            // Calculate total price from cart items
            const itemsTotal = cartItems_0.reduce((acc, item)=>acc + item.salePrice * item.quantity, 0);
            const totalOrderPrice = itemsTotal + shippingCost;
            // 2. Prepare Order Payload
            const orderPayload = {
                name: formData.fullName,
                email: formData.email,
                phone: formData.phone,
                items: cartItems_0.map((item_0)=>({
                        productId: item_0.productId,
                        quantity: item_0.quantity,
                        color: item_0.color,
                        size: item_0.size
                    })),
                totalPrice: totalOrderPrice,
                paymentMethod: 'Cash on Delivery',
                paymentStatus: 'unpaid',
                orderStatus: 'pending',
                address: `${formData.detailedAddress}, ${formData.city}, ${formData.government}` // Combine for single string schema
            };
            // 3. Create Order
            const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["END_POINT"].ORDERS, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify(orderPayload)
            });
            const json = await response.json();
            if (response.ok && json.successful) {
                // 4. Update User Data if Changed
                const initialUser = initialUserData.current;
                if (initialUser && (initialUser.phone !== formData.phone || initialUser.government !== formData.government || initialUser.city !== formData.city || initialUser.address !== formData.detailedAddress || initialUser.name !== formData.fullName)) {
                    // Construct update payload - only send what changed or full profile? 
                    // Sending full profile is safer for simpler logic
                    const userUpdatePayload = {
                        name: formData.fullName,
                        phone: formData.phone,
                        government: formData.government,
                        city: formData.city,
                        address: formData.detailedAddress
                    };
                    await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["END_POINT"].USERS}/profile`, {
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        credentials: 'include',
                        body: JSON.stringify(userUpdatePayload)
                    });
                }
                // 5. Clear Cart
                await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["END_POINT"].CART(''), {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    credentials: 'include'
                });
                setShowConfirmModal(false);
                showNotification('success', 'Order placed successfully! Redirecting...');
                setTimeout(()=>{
                    router.push('/');
                }, 1500);
            } else {
                showNotification('error', json.message || 'Failed to place order. Please try again.');
                setIsPlacingOrder(false); // Re-enable button on error
            }
        } catch (error) {
            console.error('Error placing order:', error);
            showNotification('error', 'An error occurred. Please try again.');
            setIsPlacingOrder(false); // Re-enable button on error
        }
    };
    const filteredGovernorates = EGYPTIAN_GOVERNORATES.filter((gov_0)=>gov_0.toLowerCase().includes(govSearchTerm.toLowerCase()));
    const { user, loading: userLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$UserContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUser"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Checkout.useEffect": ()=>{
            if (!userLoading && !user) {
                router.replace('/auth/login');
                return;
            }
            if (user) {
                const government = user.government || '';
                setFormData({
                    "Checkout.useEffect": (prevData_3)=>({
                            ...prevData_3,
                            fullName: user.name || '',
                            email: user.email || '',
                            phone: user.phone || '',
                            government: government,
                            city: user.city || '',
                            detailedAddress: user.address || ''
                        })
                }["Checkout.useEffect"]);
                initialUserData.current = user;
                setGovSearchTerm(government);
                calculateShipping(government);
                setIsLoading(false);
            }
        }
    }["Checkout.useEffect"], [
        user,
        userLoading,
        router
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Checkout.useEffect": ()=>{
            fetch(__TURBOPACK__imported__module__$5b$project$5d2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["END_POINT"].CART(''), {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            }).then({
                "Checkout.useEffect": (res)=>{
                    if (res.status === 401) {
                        router.replace('/auth/login');
                    }
                    return res.json();
                }
            }["Checkout.useEffect"]).then({
                "Checkout.useEffect": (json_0)=>{
                    if (json_0.successful && json_0.data) {
                        setCartItems(json_0.data);
                        const total = json_0.data.reduce({
                            "Checkout.useEffect.total": (acc_0, item_1)=>acc_0 + item_1.salePrice * item_1.quantity
                        }["Checkout.useEffect.total"], 0);
                        setSubTotal(total);
                    }
                }
            }["Checkout.useEffect"]).catch({
                "Checkout.useEffect": (error_0)=>console.log('Error fetching cart:', error_0.message)
            }["Checkout.useEffect"]);
        }
    }["Checkout.useEffect"], [
        router
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Checkout.useEffect": ()=>{
            const handleClickOutside = {
                "Checkout.useEffect.handleClickOutside": (event)=>{
                    if (govDropdownRef.current && !govDropdownRef.current.contains(event.target)) {
                        setShowGovDropdown(false);
                    }
                }
            }["Checkout.useEffect.handleClickOutside"];
            document.addEventListener('mousedown', handleClickOutside);
            return ({
                "Checkout.useEffect": ()=>{
                    document.removeEventListener('mousedown', handleClickOutside);
                }
            })["Checkout.useEffect"];
        }
    }["Checkout.useEffect"], []);
    const total_0 = shippingMessage ? subTotal : subTotal + shippingCost;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "checkout-page",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "title",
                children: "Checkout"
            }, void 0, false, {
                fileName: "[project]/app/checkout/confirm/page.jsx",
                lineNumber: 289,
                columnNumber: 7
            }, this),
            notification && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `notification-toast ${notification.type === 'success' ? 'notification-success' : 'notification-error'}`,
                children: notification.message
            }, void 0, false, {
                fileName: "[project]/app/checkout/confirm/page.jsx",
                lineNumber: 291,
                columnNumber: 24
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "section",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "section-title",
                        children: "Contact Info"
                    }, void 0, false, {
                        fileName: "[project]/app/checkout/confirm/page.jsx",
                        lineNumber: 297,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inputs-grid",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "tel",
                                    name: "phone",
                                    placeholder: "Phone Number",
                                    value: formData.phone,
                                    onChange: handleInputChange,
                                    className: errors.phone ? 'error-input' : ''
                                }, void 0, false, {
                                    fileName: "[project]/app/checkout/confirm/page.jsx",
                                    lineNumber: 300,
                                    columnNumber: 13
                                }, this),
                                errors.phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                    className: "error-text",
                                    children: errors.phone
                                }, void 0, false, {
                                    fileName: "[project]/app/checkout/confirm/page.jsx",
                                    lineNumber: 301,
                                    columnNumber: 30
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/checkout/confirm/page.jsx",
                            lineNumber: 299,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/checkout/confirm/page.jsx",
                        lineNumber: 298,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/checkout/confirm/page.jsx",
                lineNumber: 296,
                columnNumber: 7
            }, this),
            (formData.government || formData.city || formData.detailedAddress) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "section",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "section-title",
                        children: "Shipping To"
                    }, void 0, false, {
                        fileName: "[project]/app/checkout/confirm/page.jsx",
                        lineNumber: 308,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: '10px 0',
                            fontSize: '16px',
                            color: '#555'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    margin: '0 0 5px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: formData.government
                                    }, void 0, false, {
                                        fileName: "[project]/app/checkout/confirm/page.jsx",
                                        lineNumber: 317,
                                        columnNumber: 15
                                    }, this),
                                    formData.city ? `, ${formData.city}` : ''
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/checkout/confirm/page.jsx",
                                lineNumber: 314,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    margin: 0
                                },
                                children: formData.detailedAddress
                            }, void 0, false, {
                                fileName: "[project]/app/checkout/confirm/page.jsx",
                                lineNumber: 319,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/checkout/confirm/page.jsx",
                        lineNumber: 309,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/checkout/confirm/page.jsx",
                lineNumber: 307,
                columnNumber: 78
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "section",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "section-title",
                        children: "Payment Method"
                    }, void 0, false, {
                        fileName: "[project]/app/checkout/confirm/page.jsx",
                        lineNumber: 327,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "payment-box",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "radio",
                                    name: "payment",
                                    defaultChecked: true,
                                    readOnly: true
                                }, void 0, false, {
                                    fileName: "[project]/app/checkout/confirm/page.jsx",
                                    lineNumber: 330,
                                    columnNumber: 13
                                }, this),
                                "Cash on Delivery"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/checkout/confirm/page.jsx",
                            lineNumber: 329,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/checkout/confirm/page.jsx",
                        lineNumber: 328,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/checkout/confirm/page.jsx",
                lineNumber: 326,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "section summary",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "section-title",
                        children: "Order Summary"
                    }, void 0, false, {
                        fileName: "[project]/app/checkout/confirm/page.jsx",
                        lineNumber: 338,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginBottom: '20px',
                            borderBottom: '1px solid #f0f0f0',
                            paddingBottom: '10px'
                        },
                        children: cartItems.map((item_2)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    marginBottom: '8px',
                                    fontSize: '15px',
                                    color: '#555'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            item_2.name,
                                            " x ",
                                            item_2.quantity
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/checkout/confirm/page.jsx",
                                        lineNumber: 353,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            (item_2.salePrice * item_2.quantity).toFixed(2),
                                            " EGP"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/checkout/confirm/page.jsx",
                                        lineNumber: 354,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, item_2.id, true, {
                                fileName: "[project]/app/checkout/confirm/page.jsx",
                                lineNumber: 346,
                                columnNumber: 36
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/checkout/confirm/page.jsx",
                        lineNumber: 341,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "summary-item",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Subtotal"
                            }, void 0, false, {
                                fileName: "[project]/app/checkout/confirm/page.jsx",
                                lineNumber: 359,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    subTotal.toFixed(2),
                                    " EGP"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/checkout/confirm/page.jsx",
                                lineNumber: 360,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/checkout/confirm/page.jsx",
                        lineNumber: 358,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "summary-item",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Shipping"
                            }, void 0, false, {
                                fileName: "[project]/app/checkout/confirm/page.jsx",
                                lineNumber: 363,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: shippingMessage ? '14px' : '18px',
                                    color: shippingMessage ? '#e67e22' : 'inherit'
                                },
                                children: shippingMessage ? shippingMessage : `${shippingCost.toFixed(2)} EGP`
                            }, void 0, false, {
                                fileName: "[project]/app/checkout/confirm/page.jsx",
                                lineNumber: 364,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/checkout/confirm/page.jsx",
                        lineNumber: 362,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "summary-total",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Total"
                            }, void 0, false, {
                                fileName: "[project]/app/checkout/confirm/page.jsx",
                                lineNumber: 373,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    total_0.toFixed(2),
                                    " EGP"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/checkout/confirm/page.jsx",
                                lineNumber: 374,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/checkout/confirm/page.jsx",
                        lineNumber: 372,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/checkout/confirm/page.jsx",
                lineNumber: 337,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "place-order-btn",
                onClick: handleProceedToConfirmation,
                disabled: isLoading,
                children: isLoading ? 'Loading...' : 'Checkout'
            }, void 0, false, {
                fileName: "[project]/app/checkout/confirm/page.jsx",
                lineNumber: 379,
                columnNumber: 7
            }, this),
            showConfirmModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "modal-overlay",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "modal-content",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "modal-header",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "modal-title",
                                    children: "Confirm Your Details"
                                }, void 0, false, {
                                    fileName: "[project]/app/checkout/confirm/page.jsx",
                                    lineNumber: 387,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "close-modal-btn",
                                    onClick: ()=>setShowConfirmModal(false),
                                    children: "×"
                                }, void 0, false, {
                                    fileName: "[project]/app/checkout/confirm/page.jsx",
                                    lineNumber: 388,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/checkout/confirm/page.jsx",
                            lineNumber: 386,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                marginBottom: '20px',
                                color: '#666'
                            },
                            children: "Please review your information before placing the order."
                        }, void 0, false, {
                            fileName: "[project]/app/checkout/confirm/page.jsx",
                            lineNumber: 391,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "inputs-grid",
                            style: {
                                gap: '15px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'grid',
                                        gridTemplateColumns: '1fr 1fr',
                                        gap: '15px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    name: "fullName",
                                                    placeholder: "Full Name",
                                                    value: formData.fullName,
                                                    onChange: handleInputChange,
                                                    className: errors.fullName ? 'error-input' : ''
                                                }, void 0, false, {
                                                    fileName: "[project]/app/checkout/confirm/page.jsx",
                                                    lineNumber: 410,
                                                    columnNumber: 19
                                                }, this),
                                                errors.fullName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                    className: "error-text",
                                                    children: errors.fullName
                                                }, void 0, false, {
                                                    fileName: "[project]/app/checkout/confirm/page.jsx",
                                                    lineNumber: 411,
                                                    columnNumber: 39
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/checkout/confirm/page.jsx",
                                            lineNumber: 409,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "email",
                                                    name: "email",
                                                    placeholder: "Email",
                                                    value: formData.email,
                                                    onChange: handleInputChange,
                                                    className: errors.email ? 'error-input' : ''
                                                }, void 0, false, {
                                                    fileName: "[project]/app/checkout/confirm/page.jsx",
                                                    lineNumber: 414,
                                                    columnNumber: 19
                                                }, this),
                                                errors.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                    className: "error-text",
                                                    children: errors.email
                                                }, void 0, false, {
                                                    fileName: "[project]/app/checkout/confirm/page.jsx",
                                                    lineNumber: 415,
                                                    columnNumber: 36
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/checkout/confirm/page.jsx",
                                            lineNumber: 413,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/checkout/confirm/page.jsx",
                                    lineNumber: 404,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "tel",
                                            name: "phone",
                                            placeholder: "Phone Number",
                                            value: formData.phone,
                                            onChange: handleInputChange,
                                            className: errors.phone ? 'error-input' : ''
                                        }, void 0, false, {
                                            fileName: "[project]/app/checkout/confirm/page.jsx",
                                            lineNumber: 421,
                                            columnNumber: 17
                                        }, this),
                                        errors.phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                            className: "error-text",
                                            children: errors.phone
                                        }, void 0, false, {
                                            fileName: "[project]/app/checkout/confirm/page.jsx",
                                            lineNumber: 422,
                                            columnNumber: 34
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/checkout/confirm/page.jsx",
                                    lineNumber: 420,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "gov-select-wrapper",
                                    ref: govDropdownRef,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            name: "government",
                                            placeholder: "Government",
                                            value: govSearchTerm,
                                            onChange: handleGovSearch,
                                            onFocus: ()=>setShowGovDropdown(true),
                                            className: `gov-search-input ${errors.government ? 'error-input' : ''}`
                                        }, void 0, false, {
                                            fileName: "[project]/app/checkout/confirm/page.jsx",
                                            lineNumber: 427,
                                            columnNumber: 17
                                        }, this),
                                        errors.government && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                            className: "error-text",
                                            children: errors.government
                                        }, void 0, false, {
                                            fileName: "[project]/app/checkout/confirm/page.jsx",
                                            lineNumber: 428,
                                            columnNumber: 39
                                        }, this),
                                        showGovDropdown && filteredGovernorates.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "gov-dropdown",
                                            children: filteredGovernorates.map((governorate_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "gov-option",
                                                    onClick: ()=>handleGovSelect(governorate_0),
                                                    children: governorate_0
                                                }, governorate_0, false, {
                                                    fileName: "[project]/app/checkout/confirm/page.jsx",
                                                    lineNumber: 430,
                                                    columnNumber: 64
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/checkout/confirm/page.jsx",
                                            lineNumber: 429,
                                            columnNumber: 72
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/checkout/confirm/page.jsx",
                                    lineNumber: 426,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            name: "city",
                                            placeholder: "City",
                                            value: formData.city,
                                            onChange: handleInputChange,
                                            className: errors.city ? 'error-input' : ''
                                        }, void 0, false, {
                                            fileName: "[project]/app/checkout/confirm/page.jsx",
                                            lineNumber: 438,
                                            columnNumber: 17
                                        }, this),
                                        errors.city && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                            className: "error-text",
                                            children: errors.city
                                        }, void 0, false, {
                                            fileName: "[project]/app/checkout/confirm/page.jsx",
                                            lineNumber: 439,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/checkout/confirm/page.jsx",
                                    lineNumber: 437,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    name: "detailedAddress",
                                    placeholder: "Detailed Address",
                                    value: formData.detailedAddress,
                                    onChange: handleInputChange,
                                    className: `detailed-address-textarea ${errors.detailedAddress ? 'error-input' : ''}`,
                                    style: {
                                        minHeight: '80px'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/checkout/confirm/page.jsx",
                                    lineNumber: 443,
                                    columnNumber: 15
                                }, this),
                                errors.detailedAddress && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                    className: "error-text",
                                    children: errors.detailedAddress
                                }, void 0, false, {
                                    fileName: "[project]/app/checkout/confirm/page.jsx",
                                    lineNumber: 446,
                                    columnNumber: 42
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/checkout/confirm/page.jsx",
                            lineNumber: 399,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "summary",
                            style: {
                                marginTop: '20px',
                                background: '#fafafa',
                                padding: '15px',
                                borderRadius: '12px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "summary-item flex flex-col",
                                    style: {
                                        fontSize: '16px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Shipping:"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/checkout/confirm/page.jsx",
                                                    lineNumber: 460,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: [
                                                        shippingCost.toFixed(2),
                                                        " EGP"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/checkout/confirm/page.jsx",
                                                    lineNumber: 461,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/checkout/confirm/page.jsx",
                                            lineNumber: 459,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Total with Shipping:"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/checkout/confirm/page.jsx",
                                                    lineNumber: 464,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: [
                                                        total_0.toFixed(2),
                                                        " EGP"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/checkout/confirm/page.jsx",
                                                    lineNumber: 465,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/checkout/confirm/page.jsx",
                                            lineNumber: 463,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/checkout/confirm/page.jsx",
                                    lineNumber: 456,
                                    columnNumber: 15
                                }, this),
                                shippingMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                    style: {
                                        color: '#e67e22'
                                    },
                                    children: shippingMessage
                                }, void 0, false, {
                                    fileName: "[project]/app/checkout/confirm/page.jsx",
                                    lineNumber: 468,
                                    columnNumber: 35
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/checkout/confirm/page.jsx",
                            lineNumber: 450,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "modal-actions",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn-secondary",
                                    onClick: ()=>setShowConfirmModal(false),
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/app/checkout/confirm/page.jsx",
                                    lineNumber: 474,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn-primary",
                                    onClick: confirmOrder,
                                    disabled: isPlacingOrder,
                                    children: isPlacingOrder ? 'Confirming...' : 'Save & Confirm Order'
                                }, void 0, false, {
                                    fileName: "[project]/app/checkout/confirm/page.jsx",
                                    lineNumber: 477,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/checkout/confirm/page.jsx",
                            lineNumber: 473,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/checkout/confirm/page.jsx",
                    lineNumber: 385,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/checkout/confirm/page.jsx",
                lineNumber: 384,
                columnNumber: 28
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/checkout/confirm/page.jsx",
        lineNumber: 288,
        columnNumber: 10
    }, this);
}
_s(Checkout, "sT7Mm7O5jF8++wVueS5KaA6A/7c=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$UserContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUser"]
    ];
});
_c = Checkout;
var _c;
__turbopack_context__.k.register(_c, "Checkout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_checkout_confirm_page_jsx_905391d7._.js.map