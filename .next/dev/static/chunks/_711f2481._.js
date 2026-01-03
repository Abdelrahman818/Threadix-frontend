(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/config.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "API_BASE_URL",
    ()=>API_BASE_URL,
    "END_POINT",
    ()=>END_POINT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const API_BASE_URL = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8080";
const END_POINT = {
    LOGIN: `${API_BASE_URL}/api/auth/login`,
    SIGNUP: `${API_BASE_URL}/api/auth/signup`,
    LOGOUT: `${API_BASE_URL}/api/auth/logout`,
    VERIFY_USER: `${API_BASE_URL}/api/auth/verifyUser`,
    ACTIVATE_USER: `${API_BASE_URL}/api/auth/verifyUser`,
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
    CART: (id)=>`${API_BASE_URL}/api/cart${id ? '/' + id : ''}`,
    ORDERS: `${API_BASE_URL}/api/orders`,
    ADMIN_STATS: `${API_BASE_URL}/api/admin/stats`
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/styles/checkout.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "btn-primary": "checkout-module__r7yD0G__btn-primary",
  "btn-secondary": "checkout-module__r7yD0G__btn-secondary",
  "checkout-page": "checkout-module__r7yD0G__checkout-page",
  "close-modal-btn": "checkout-module__r7yD0G__close-modal-btn",
  "detailed-address-textarea": "checkout-module__r7yD0G__detailed-address-textarea",
  "error-input": "checkout-module__r7yD0G__error-input",
  "error-text": "checkout-module__r7yD0G__error-text",
  "fadeIn": "checkout-module__r7yD0G__fadeIn",
  "gov-dropdown": "checkout-module__r7yD0G__gov-dropdown",
  "gov-option": "checkout-module__r7yD0G__gov-option",
  "gov-search-input": "checkout-module__r7yD0G__gov-search-input",
  "gov-select-wrapper": "checkout-module__r7yD0G__gov-select-wrapper",
  "inputs-grid": "checkout-module__r7yD0G__inputs-grid",
  "modal-actions": "checkout-module__r7yD0G__modal-actions",
  "modal-content": "checkout-module__r7yD0G__modal-content",
  "modal-header": "checkout-module__r7yD0G__modal-header",
  "modal-overlay": "checkout-module__r7yD0G__modal-overlay",
  "modal-title": "checkout-module__r7yD0G__modal-title",
  "notification-error": "checkout-module__r7yD0G__notification-error",
  "notification-success": "checkout-module__r7yD0G__notification-success",
  "notification-toast": "checkout-module__r7yD0G__notification-toast",
  "payment-box": "checkout-module__r7yD0G__payment-box",
  "place-order-btn": "checkout-module__r7yD0G__place-order-btn",
  "scaleUp": "checkout-module__r7yD0G__scaleUp",
  "section": "checkout-module__r7yD0G__section",
  "section-title": "checkout-module__r7yD0G__section-title",
  "slideIn": "checkout-module__r7yD0G__slideIn",
  "summary-item": "checkout-module__r7yD0G__summary-item",
  "summary-total": "checkout-module__r7yD0G__summary-total",
  "title": "checkout-module__r7yD0G__title",
});
}),
"[project]/app/checkout/confirm/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Checkout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/config.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$checkout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/styles/checkout.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
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
;
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Checkout.useEffect": ()=>{
            // Fetch current user data from backend
            fetch(__TURBOPACK__imported__module__$5b$project$5d2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["END_POINT"].GET_CURRENT_USER, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            }).then({
                "Checkout.useEffect": (res)=>res.json()
            }["Checkout.useEffect"]).then({
                "Checkout.useEffect": (json)=>{
                    if (json.successful && json.data) {
                        const user = json.data;
                        const government = user.government || '';
                        setFormData({
                            "Checkout.useEffect": (prevData)=>({
                                    ...prevData,
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
                    }
                }
            }["Checkout.useEffect"]).catch({
                "Checkout.useEffect": (error)=>{
                    console.log('Error fetching user data:', error.message);
                }
            }["Checkout.useEffect"]).finally({
                "Checkout.useEffect": ()=>{
                    setIsLoading(false);
                }
            }["Checkout.useEffect"]);
            // Fetch cart items for summary
            fetch(__TURBOPACK__imported__module__$5b$project$5d2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["END_POINT"].CART(''), {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            }).then({
                "Checkout.useEffect": (res_0)=>res_0.json()
            }["Checkout.useEffect"]).then({
                "Checkout.useEffect": (json_0)=>{
                    if (json_0.successful && json_0.data) {
                        setCartItems(json_0.data);
                        const total = json_0.data.reduce({
                            "Checkout.useEffect.total": (acc, item)=>acc + item.salePrice * item.quantity
                        }["Checkout.useEffect.total"], 0);
                        setSubTotal(total);
                    }
                }
            }["Checkout.useEffect"]).catch({
                "Checkout.useEffect": (error_0)=>console.log('Error fetching cart:', error_0.message)
            }["Checkout.useEffect"]);
        }
    }["Checkout.useEffect"], []);
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
        setFormData((prevData_0)=>({
                ...prevData_0,
                [name]: value
            }));
    };
    const handleGovSearch = (e_0)=>{
        const value_0 = e_0.target.value;
        setGovSearchTerm(value_0);
        setShowGovDropdown(true);
        // Update formData if user is typing a valid governorate
        if (value_0 && EGYPTIAN_GOVERNORATES.includes(value_0)) {
            setFormData((prevData_1)=>({
                    ...prevData_1,
                    government: value_0
                }));
            calculateShipping(value_0);
        } else if (!value_0) {
            setFormData((prevData_2)=>({
                    ...prevData_2,
                    government: ''
                }));
            calculateShipping('');
        }
    };
    const handleGovSelect = (governorate)=>{
        setFormData((prevData_3)=>({
                ...prevData_3,
                government: governorate
            }));
        setGovSearchTerm(governorate);
        setShowGovDropdown(false);
        calculateShipping(governorate);
    };
    // Validate only Phone for the initial view
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
    // Validate Full Form (for Modal)
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
    // Step 1: Open Modal
    const handleProceedToConfirmation = (e_1)=>{
        e_1.preventDefault();
        if (validatePhoneOnly()) {
            setShowConfirmModal(true);
        }
    };
    // Step 2: Final Place Order (Inside Modal)
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
            const itemsTotal = cartItems_0.reduce((acc_0, item_0)=>acc_0 + item_0.salePrice * item_0.quantity, 0);
            const totalOrderPrice = itemsTotal + shippingCost;
            // 2. Prepare Order Payload
            const orderPayload = {
                name: formData.fullName,
                email: formData.email,
                phone: formData.phone,
                items: cartItems_0.map((item_1)=>({
                        productId: item_1.productId,
                        quantity: item_1.quantity,
                        color: item_1.color,
                        size: item_1.size
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
            const json_1 = await response.json();
            if (response.ok && json_1.successful) {
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
                showNotification('error', json_1.message || 'Failed to place order. Please try again.');
                setIsPlacingOrder(false); // Re-enable button on error
            }
        } catch (error_1) {
            console.error('Error placing order:', error_1);
            showNotification('error', 'An error occurred. Please try again.');
            setIsPlacingOrder(false); // Re-enable button on error
        }
    };
    const filteredGovernorates = EGYPTIAN_GOVERNORATES.filter((gov_0)=>gov_0.toLowerCase().includes(govSearchTerm.toLowerCase()));
    const total_0 = shippingMessage ? subTotal : subTotal + shippingCost;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "checkout-page",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "title",
                children: "Checkout"
            }, void 0, false, {
                fileName: "[project]/app/checkout/confirm/page.jsx",
                lineNumber: 297,
                columnNumber: 7
            }, this),
            notification && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `notification-toast ${notification.type === 'success' ? 'notification-success' : 'notification-error'}`,
                children: notification.message
            }, void 0, false, {
                fileName: "[project]/app/checkout/confirm/page.jsx",
                lineNumber: 299,
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
                        lineNumber: 307,
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
                                    lineNumber: 310,
                                    columnNumber: 13
                                }, this),
                                errors.phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                    className: "error-text",
                                    children: errors.phone
                                }, void 0, false, {
                                    fileName: "[project]/app/checkout/confirm/page.jsx",
                                    lineNumber: 311,
                                    columnNumber: 30
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/checkout/confirm/page.jsx",
                            lineNumber: 309,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/checkout/confirm/page.jsx",
                        lineNumber: 308,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/checkout/confirm/page.jsx",
                lineNumber: 306,
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
                        lineNumber: 318,
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
                                        lineNumber: 327,
                                        columnNumber: 15
                                    }, this),
                                    formData.city ? `, ${formData.city}` : ''
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/checkout/confirm/page.jsx",
                                lineNumber: 324,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    margin: 0
                                },
                                children: formData.detailedAddress
                            }, void 0, false, {
                                fileName: "[project]/app/checkout/confirm/page.jsx",
                                lineNumber: 329,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/checkout/confirm/page.jsx",
                        lineNumber: 319,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/checkout/confirm/page.jsx",
                lineNumber: 317,
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
                        lineNumber: 337,
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
                                    lineNumber: 340,
                                    columnNumber: 13
                                }, this),
                                "Cash on Delivery"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/checkout/confirm/page.jsx",
                            lineNumber: 339,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/checkout/confirm/page.jsx",
                        lineNumber: 338,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/checkout/confirm/page.jsx",
                lineNumber: 336,
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
                        lineNumber: 348,
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
                                        lineNumber: 363,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            (item_2.salePrice * item_2.quantity).toFixed(2),
                                            " EGP"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/checkout/confirm/page.jsx",
                                        lineNumber: 364,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, item_2.id, true, {
                                fileName: "[project]/app/checkout/confirm/page.jsx",
                                lineNumber: 356,
                                columnNumber: 36
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/checkout/confirm/page.jsx",
                        lineNumber: 351,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "summary-item",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Subtotal"
                            }, void 0, false, {
                                fileName: "[project]/app/checkout/confirm/page.jsx",
                                lineNumber: 369,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    subTotal.toFixed(2),
                                    " EGP"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/checkout/confirm/page.jsx",
                                lineNumber: 370,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/checkout/confirm/page.jsx",
                        lineNumber: 368,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "summary-item",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Shipping"
                            }, void 0, false, {
                                fileName: "[project]/app/checkout/confirm/page.jsx",
                                lineNumber: 373,
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
                                lineNumber: 374,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/checkout/confirm/page.jsx",
                        lineNumber: 372,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "summary-total",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Total"
                            }, void 0, false, {
                                fileName: "[project]/app/checkout/confirm/page.jsx",
                                lineNumber: 383,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    total_0.toFixed(2),
                                    " EGP"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/checkout/confirm/page.jsx",
                                lineNumber: 384,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/checkout/confirm/page.jsx",
                        lineNumber: 382,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/checkout/confirm/page.jsx",
                lineNumber: 347,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "place-order-btn",
                onClick: handleProceedToConfirmation,
                disabled: isLoading,
                children: isLoading ? 'Loading...' : 'Checkout'
            }, void 0, false, {
                fileName: "[project]/app/checkout/confirm/page.jsx",
                lineNumber: 389,
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
                                    lineNumber: 397,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "close-modal-btn",
                                    onClick: ()=>setShowConfirmModal(false),
                                    children: "×"
                                }, void 0, false, {
                                    fileName: "[project]/app/checkout/confirm/page.jsx",
                                    lineNumber: 398,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/checkout/confirm/page.jsx",
                            lineNumber: 396,
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
                            lineNumber: 401,
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
                                                    lineNumber: 420,
                                                    columnNumber: 19
                                                }, this),
                                                errors.fullName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                    className: "error-text",
                                                    children: errors.fullName
                                                }, void 0, false, {
                                                    fileName: "[project]/app/checkout/confirm/page.jsx",
                                                    lineNumber: 421,
                                                    columnNumber: 39
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/checkout/confirm/page.jsx",
                                            lineNumber: 419,
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
                                                    lineNumber: 424,
                                                    columnNumber: 19
                                                }, this),
                                                errors.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                    className: "error-text",
                                                    children: errors.email
                                                }, void 0, false, {
                                                    fileName: "[project]/app/checkout/confirm/page.jsx",
                                                    lineNumber: 425,
                                                    columnNumber: 36
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/checkout/confirm/page.jsx",
                                            lineNumber: 423,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/checkout/confirm/page.jsx",
                                    lineNumber: 414,
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
                                            lineNumber: 431,
                                            columnNumber: 17
                                        }, this),
                                        errors.phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                            className: "error-text",
                                            children: errors.phone
                                        }, void 0, false, {
                                            fileName: "[project]/app/checkout/confirm/page.jsx",
                                            lineNumber: 432,
                                            columnNumber: 34
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/checkout/confirm/page.jsx",
                                    lineNumber: 430,
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
                                            lineNumber: 437,
                                            columnNumber: 17
                                        }, this),
                                        errors.government && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                            className: "error-text",
                                            children: errors.government
                                        }, void 0, false, {
                                            fileName: "[project]/app/checkout/confirm/page.jsx",
                                            lineNumber: 438,
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
                                                    lineNumber: 440,
                                                    columnNumber: 64
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/checkout/confirm/page.jsx",
                                            lineNumber: 439,
                                            columnNumber: 72
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/checkout/confirm/page.jsx",
                                    lineNumber: 436,
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
                                            lineNumber: 448,
                                            columnNumber: 17
                                        }, this),
                                        errors.city && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                            className: "error-text",
                                            children: errors.city
                                        }, void 0, false, {
                                            fileName: "[project]/app/checkout/confirm/page.jsx",
                                            lineNumber: 449,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/checkout/confirm/page.jsx",
                                    lineNumber: 447,
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
                                    lineNumber: 453,
                                    columnNumber: 15
                                }, this),
                                errors.detailedAddress && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                    className: "error-text",
                                    children: errors.detailedAddress
                                }, void 0, false, {
                                    fileName: "[project]/app/checkout/confirm/page.jsx",
                                    lineNumber: 456,
                                    columnNumber: 42
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/checkout/confirm/page.jsx",
                            lineNumber: 409,
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
                                                    lineNumber: 470,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: [
                                                        shippingCost.toFixed(2),
                                                        " EGP"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/checkout/confirm/page.jsx",
                                                    lineNumber: 471,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/checkout/confirm/page.jsx",
                                            lineNumber: 469,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Total with Shipping:"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/checkout/confirm/page.jsx",
                                                    lineNumber: 474,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: [
                                                        total_0.toFixed(2),
                                                        " EGP"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/checkout/confirm/page.jsx",
                                                    lineNumber: 475,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/checkout/confirm/page.jsx",
                                            lineNumber: 473,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/checkout/confirm/page.jsx",
                                    lineNumber: 466,
                                    columnNumber: 15
                                }, this),
                                shippingMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                    style: {
                                        color: '#e67e22'
                                    },
                                    children: shippingMessage
                                }, void 0, false, {
                                    fileName: "[project]/app/checkout/confirm/page.jsx",
                                    lineNumber: 478,
                                    columnNumber: 35
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/checkout/confirm/page.jsx",
                            lineNumber: 460,
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
                                    lineNumber: 484,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn-primary",
                                    onClick: confirmOrder,
                                    disabled: isPlacingOrder,
                                    children: isPlacingOrder ? 'Confirming...' : 'Save & Confirm Order'
                                }, void 0, false, {
                                    fileName: "[project]/app/checkout/confirm/page.jsx",
                                    lineNumber: 487,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/checkout/confirm/page.jsx",
                            lineNumber: 483,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/checkout/confirm/page.jsx",
                    lineNumber: 395,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/checkout/confirm/page.jsx",
                lineNumber: 394,
                columnNumber: 28
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/checkout/confirm/page.jsx",
        lineNumber: 296,
        columnNumber: 10
    }, this);
}
_s(Checkout, "cxFm6PxI48SzaeWZAjBVG1LETH8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Checkout;
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
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_711f2481._.js.map