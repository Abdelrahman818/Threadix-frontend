module.exports = [
"[project]/styles/checkout.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

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
"[project]/app/checkout/confirm/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Checkout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/config.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$UserContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/UserContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$checkout$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/styles/checkout.module.css [app-ssr] (css module)");
"use client";
;
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
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        fullName: '',
        email: '',
        phone: '',
        city: '',
        government: '',
        detailedAddress: ''
    });
    const [shippingCost, setShippingCost] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [shippingMessage, setShippingMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('will be determined in the next step');
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [notification, setNotification] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const { user, loading: userLoading, cartItems: ctxCartItems, refreshCart } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$UserContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useUser"])();
    const [cartItems, setCartItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [subTotal, setSubTotal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isPlacingOrder, setIsPlacingOrder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Modal State
    const [showConfirmModal, setShowConfirmModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const initialUserData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Governorate Search State
    const [govSearchTerm, setGovSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [showGovDropdown, setShowGovDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const govDropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
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
    const handleGovSearch = (e)=>{
        const value = e.target.value;
        setGovSearchTerm(value);
        setShowGovDropdown(true);
        if (value && EGYPTIAN_GOVERNORATES.includes(value)) {
            setFormData((prevData)=>({
                    ...prevData,
                    government: value
                }));
            calculateShipping(value);
        } else if (!value) {
            setFormData((prevData)=>({
                    ...prevData,
                    government: ''
                }));
            calculateShipping('');
        }
    };
    const handleGovSelect = (governorate)=>{
        setFormData((prevData)=>({
                ...prevData,
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
    const handleProceedToConfirmation = (e)=>{
        e.preventDefault();
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
            if (ctxCartItems.length === 0) {
                showNotification('error', 'Your cart is empty.');
                setIsPlacingOrder(false);
                return;
            }
            const cartItemsForOrder = ctxCartItems;
            // Calculate total price from cart items
            const itemsTotal = cartItemsForOrder.reduce((acc, item)=>acc + item.salePrice * item.quantity, 0);
            const totalOrderPrice = itemsTotal + shippingCost;
            // 2. Prepare Order Payload
            const orderPayload = {
                name: formData.fullName,
                email: formData.email,
                phone: formData.phone,
                items: cartItemsForOrder.map((item)=>({
                        productId: item.productId,
                        quantity: item.quantity,
                        color: item.color,
                        size: item.size
                    })),
                totalPrice: totalOrderPrice,
                paymentMethod: 'Cash on Delivery',
                paymentStatus: 'unpaid',
                orderStatus: 'pending',
                address: `${formData.detailedAddress}, ${formData.city}, ${formData.government}`
            };
            // 3. Create Order
            const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["END_POINT"].ORDERS, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify(orderPayload)
            });
            const json = await response.json();
            if (response.ok && json.successful) {
                // 4. Update User Data if Changed (only update fields that exist in the schema)
                const initialUser = initialUserData.current;
                if (initialUser && (initialUser.phone !== formData.phone || initialUser.address !== formData.detailedAddress || initialUser.name !== formData.fullName)) {
                    // Construct update payload - only send fields that exist in Users model
                    const userUpdatePayload = {
                        name: formData.fullName,
                        phone: formData.phone,
                        address: formData.detailedAddress
                    };
                    try {
                        const userUpdateResponse = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["END_POINT"].USERS}/profile`, {
                            method: 'PATCH',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            credentials: 'include',
                            body: JSON.stringify(userUpdatePayload)
                        });
                        // Don't fail the order if profile update fails
                        if (!userUpdateResponse.ok) {
                            console.warn('Profile update failed, but order was placed successfully');
                        }
                    } catch (updateError) {
                        // Silently fail - order is already placed
                        console.warn('Profile update error:', updateError);
                    }
                }
                // 5. Clear Cart & Refresh
                await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["END_POINT"].CART(''), {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    credentials: 'include'
                });
                refreshCart();
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
    const filteredGovernorates = EGYPTIAN_GOVERNORATES.filter((gov)=>gov.toLowerCase().includes(govSearchTerm.toLowerCase()));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!userLoading && !user) {
            router.replace('/auth/login');
            return;
        }
        if (user) {
            const government = user.government || '';
            setFormData((prevData)=>({
                    ...prevData,
                    fullName: user.name || '',
                    email: user.email || '',
                    phone: user.phone || '',
                    government: government,
                    city: user.city || '',
                    detailedAddress: user.address || ''
                }));
            initialUserData.current = user;
            setGovSearchTerm(government);
            calculateShipping(government);
            setIsLoading(false);
        }
    }, [
        user,
        userLoading,
        router
    ]);
    // Sync local cartItems for subtotal calculation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (ctxCartItems) {
            setCartItems(ctxCartItems);
            const total = ctxCartItems.reduce((acc, item)=>acc + item.salePrice * item.quantity, 0);
            setSubTotal(total);
        }
    }, [
        ctxCartItems
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleClickOutside = (event)=>{
            if (govDropdownRef.current && !govDropdownRef.current.contains(event.target)) {
                setShowGovDropdown(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return ()=>{
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    const total = shippingMessage ? subTotal : subTotal + shippingCost;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$checkout$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['checkout-page'],
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$checkout$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                children: "Checkout"
            }, void 0, false, {
                fileName: "[project]/app/checkout/confirm/page.jsx",
                lineNumber: 327,
                columnNumber: 7
            }, this),
            notification && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$checkout$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['notification-toast']} ${notification.type === 'success' ? __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$checkout$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['notification-success'] : __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$checkout$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['notification-error']}`,
                children: notification.message
            }, void 0, false, {
                fileName: "[project]/app/checkout/confirm/page.jsx",
                lineNumber: 330,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$checkout$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].section,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$checkout$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['section-title'],
                        children: "Contact Info"
                    }, void 0, false, {
                        fileName: "[project]/app/checkout/confirm/page.jsx",
                        lineNumber: 337,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$checkout$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['inputs-grid'],
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "tel",
                                    name: "phone",
                                    placeholder: "Phone Number",
                                    value: formData.phone,
                                    onChange: handleInputChange,
                                    className: errors.phone ? __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$checkout$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['error-input'] : ''
                                }, void 0, false, {
                                    fileName: "[project]/app/checkout/confirm/page.jsx",
                                    lineNumber: 340,
                                    columnNumber: 13
                                }, this),
                                errors.phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$checkout$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['error-text'],
                                    children: errors.phone
                                }, void 0, false, {
                                    fileName: "[project]/app/checkout/confirm/page.jsx",
                                    lineNumber: 348,
                                    columnNumber: 30
                                }, this)
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
            (formData.government || formData.city || formData.detailedAddress) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$checkout$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].section,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$checkout$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['section-title'],
                        children: "Shipping To"
                    }, void 0, false, {
                        fileName: "[project]/app/checkout/confirm/page.jsx",
                        lineNumber: 356,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: '10px 0',
                            fontSize: '16px',
                            color: '#555'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    margin: '0 0 5px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: formData.government
                                    }, void 0, false, {
                                        fileName: "[project]/app/checkout/confirm/page.jsx",
                                        lineNumber: 359,
                                        columnNumber: 15
                                    }, this),
                                    formData.city ? `, ${formData.city}` : ''
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/checkout/confirm/page.jsx",
                                lineNumber: 358,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    margin: 0
                                },
                                children: formData.detailedAddress
                            }, void 0, false, {
                                fileName: "[project]/app/checkout/confirm/page.jsx",
                                lineNumber: 361,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/checkout/confirm/page.jsx",
                        lineNumber: 357,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/checkout/confirm/page.jsx",
                lineNumber: 355,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$checkout$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].section,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$checkout$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['section-title'],
                        children: "Payment Method"
                    }, void 0, false, {
                        fileName: "[project]/app/checkout/confirm/page.jsx",
                        lineNumber: 368,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$checkout$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['payment-box'],
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "radio",
                                    name: "payment",
                                    defaultChecked: true,
                                    readOnly: true
                                }, void 0, false, {
                                    fileName: "[project]/app/checkout/confirm/page.jsx",
                                    lineNumber: 371,
                                    columnNumber: 13
                                }, this),
                                "Cash on Delivery"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/checkout/confirm/page.jsx",
                            lineNumber: 370,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/checkout/confirm/page.jsx",
                        lineNumber: 369,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/checkout/confirm/page.jsx",
                lineNumber: 367,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$checkout$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].section} ${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$checkout$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].summary}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$checkout$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['section-title'],
                        children: "Order Summary"
                    }, void 0, false, {
                        fileName: "[project]/app/checkout/confirm/page.jsx",
                        lineNumber: 379,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginBottom: '20px',
                            borderBottom: '1px solid #f0f0f0',
                            paddingBottom: '10px'
                        },
                        children: cartItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    marginBottom: '8px',
                                    fontSize: '15px',
                                    color: '#555'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            item.name,
                                            " x ",
                                            item.quantity
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/checkout/confirm/page.jsx",
                                        lineNumber: 385,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            (item.salePrice * item.quantity).toFixed(2),
                                            " EGP"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/checkout/confirm/page.jsx",
                                        lineNumber: 386,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, item.id, true, {
                                fileName: "[project]/app/checkout/confirm/page.jsx",
                                lineNumber: 384,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/checkout/confirm/page.jsx",
                        lineNumber: 382,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$checkout$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['summary-item'],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Subtotal"
                            }, void 0, false, {
                                fileName: "[project]/app/checkout/confirm/page.jsx",
                                lineNumber: 392,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    subTotal.toFixed(2),
                                    " EGP"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/checkout/confirm/page.jsx",
                                lineNumber: 393,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/checkout/confirm/page.jsx",
                        lineNumber: 391,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$checkout$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['summary-item'],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Shipping"
                            }, void 0, false, {
                                fileName: "[project]/app/checkout/confirm/page.jsx",
                                lineNumber: 396,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: shippingMessage ? '14px' : '18px',
                                    color: shippingMessage ? '#e67e22' : 'inherit'
                                },
                                children: shippingMessage ? shippingMessage : `${shippingCost.toFixed(2)} EGP`
                            }, void 0, false, {
                                fileName: "[project]/app/checkout/confirm/page.jsx",
                                lineNumber: 397,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/checkout/confirm/page.jsx",
                        lineNumber: 395,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$checkout$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['summary-total'],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Total"
                            }, void 0, false, {
                                fileName: "[project]/app/checkout/confirm/page.jsx",
                                lineNumber: 403,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    total.toFixed(2),
                                    " EGP"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/checkout/confirm/page.jsx",
                                lineNumber: 404,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/checkout/confirm/page.jsx",
                        lineNumber: 402,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/checkout/confirm/page.jsx",
                lineNumber: 378,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$checkout$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['place-order-btn'],
                onClick: handleProceedToConfirmation,
                disabled: isLoading,
                children: isLoading ? 'Loading...' : 'Checkout'
            }, void 0, false, {
                fileName: "[project]/app/checkout/confirm/page.jsx",
                lineNumber: 409,
                columnNumber: 7
            }, this),
            showConfirmModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$checkout$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['modal-overlay'],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$checkout$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['modal-content'],
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$checkout$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['modal-header'],
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$checkout$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['modal-title'],
                                    children: "Confirm Your Details"
                                }, void 0, false, {
                                    fileName: "[project]/app/checkout/confirm/page.jsx",
                                    lineNumber: 422,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$checkout$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['close-modal-btn'],
                                    onClick: ()=>setShowConfirmModal(false),
                                    children: "×"
                                }, void 0, false, {
                                    fileName: "[project]/app/checkout/confirm/page.jsx",
                                    lineNumber: 423,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/checkout/confirm/page.jsx",
                            lineNumber: 421,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                marginBottom: '20px',
                                color: '#666'
                            },
                            children: "Please review your information before placing the order."
                        }, void 0, false, {
                            fileName: "[project]/app/checkout/confirm/page.jsx",
                            lineNumber: 426,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$checkout$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['inputs-grid'],
                            style: {
                                gap: '15px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'grid',
                                        gridTemplateColumns: '1fr 1fr',
                                        gap: '15px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    name: "fullName",
                                                    placeholder: "Full Name",
                                                    value: formData.fullName,
                                                    onChange: handleInputChange,
                                                    className: errors.fullName ? __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$checkout$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['error-input'] : ''
                                                }, void 0, false, {
                                                    fileName: "[project]/app/checkout/confirm/page.jsx",
                                                    lineNumber: 436,
                                                    columnNumber: 19
                                                }, this),
                                                errors.fullName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$checkout$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['error-text'],
                                                    children: errors.fullName
                                                }, void 0, false, {
                                                    fileName: "[project]/app/checkout/confirm/page.jsx",
                                                    lineNumber: 444,
                                                    columnNumber: 39
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/checkout/confirm/page.jsx",
                                            lineNumber: 435,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "email",
                                                    name: "email",
                                                    placeholder: "Email",
                                                    value: formData.email,
                                                    className: errors.email ? __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$checkout$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['error-input'] : '',
                                                    disabled: true
                                                }, void 0, false, {
                                                    fileName: "[project]/app/checkout/confirm/page.jsx",
                                                    lineNumber: 447,
                                                    columnNumber: 19
                                                }, this),
                                                errors.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$checkout$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['error-text'],
                                                    children: errors.email
                                                }, void 0, false, {
                                                    fileName: "[project]/app/checkout/confirm/page.jsx",
                                                    lineNumber: 455,
                                                    columnNumber: 36
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/checkout/confirm/page.jsx",
                                            lineNumber: 446,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/checkout/confirm/page.jsx",
                                    lineNumber: 434,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "tel",
                                            name: "phone",
                                            placeholder: "Phone Number",
                                            value: formData.phone,
                                            onChange: handleInputChange,
                                            className: errors.phone ? __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$checkout$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['error-input'] : ''
                                        }, void 0, false, {
                                            fileName: "[project]/app/checkout/confirm/page.jsx",
                                            lineNumber: 461,
                                            columnNumber: 17
                                        }, this),
                                        errors.phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$checkout$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['error-text'],
                                            children: errors.phone
                                        }, void 0, false, {
                                            fileName: "[project]/app/checkout/confirm/page.jsx",
                                            lineNumber: 469,
                                            columnNumber: 34
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/checkout/confirm/page.jsx",
                                    lineNumber: 460,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$checkout$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['gov-select-wrapper'],
                                    ref: govDropdownRef,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            name: "government",
                                            placeholder: "Government",
                                            value: govSearchTerm,
                                            onChange: handleGovSearch,
                                            onFocus: ()=>setShowGovDropdown(true),
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$checkout$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['gov-search-input']} ${errors.government ? __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$checkout$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['error-input'] : ''}`
                                        }, void 0, false, {
                                            fileName: "[project]/app/checkout/confirm/page.jsx",
                                            lineNumber: 474,
                                            columnNumber: 17
                                        }, this),
                                        errors.government && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$checkout$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['error-text'],
                                            children: errors.government
                                        }, void 0, false, {
                                            fileName: "[project]/app/checkout/confirm/page.jsx",
                                            lineNumber: 483,
                                            columnNumber: 39
                                        }, this),
                                        showGovDropdown && filteredGovernorates.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$checkout$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['gov-dropdown'],
                                            children: filteredGovernorates.map((governorate)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$checkout$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['gov-option'],
                                                    onClick: ()=>handleGovSelect(governorate),
                                                    children: governorate
                                                }, governorate, false, {
                                                    fileName: "[project]/app/checkout/confirm/page.jsx",
                                                    lineNumber: 487,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/checkout/confirm/page.jsx",
                                            lineNumber: 485,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/checkout/confirm/page.jsx",
                                    lineNumber: 473,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            name: "city",
                                            placeholder: "City",
                                            value: formData.city,
                                            onChange: handleInputChange,
                                            className: errors.city ? __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$checkout$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['error-input'] : ''
                                        }, void 0, false, {
                                            fileName: "[project]/app/checkout/confirm/page.jsx",
                                            lineNumber: 501,
                                            columnNumber: 17
                                        }, this),
                                        errors.city && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$checkout$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['error-text'],
                                            children: errors.city
                                        }, void 0, false, {
                                            fileName: "[project]/app/checkout/confirm/page.jsx",
                                            lineNumber: 509,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/checkout/confirm/page.jsx",
                                    lineNumber: 500,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    name: "detailedAddress",
                                    placeholder: "Detailed Address",
                                    value: formData.detailedAddress,
                                    onChange: handleInputChange,
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$checkout$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['detailed-address-textarea']} ${errors.detailedAddress ? __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$checkout$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['error-input'] : ''}`,
                                    style: {
                                        minHeight: '80px'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/checkout/confirm/page.jsx",
                                    lineNumber: 513,
                                    columnNumber: 15
                                }, this),
                                errors.detailedAddress && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$checkout$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['error-text'],
                                    children: errors.detailedAddress
                                }, void 0, false, {
                                    fileName: "[project]/app/checkout/confirm/page.jsx",
                                    lineNumber: 521,
                                    columnNumber: 42
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/checkout/confirm/page.jsx",
                            lineNumber: 431,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$checkout$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].summary,
                            style: {
                                marginTop: '20px',
                                background: '#fafafa',
                                padding: '15px',
                                borderRadius: '12px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$checkout$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['summary-item']} flex flex-col`,
                                    style: {
                                        fontSize: '16px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Shipping:"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/checkout/confirm/page.jsx",
                                                    lineNumber: 528,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: [
                                                        shippingCost.toFixed(2),
                                                        " EGP"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/checkout/confirm/page.jsx",
                                                    lineNumber: 529,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/checkout/confirm/page.jsx",
                                            lineNumber: 527,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Total with Shipping:"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/checkout/confirm/page.jsx",
                                                    lineNumber: 532,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: [
                                                        total.toFixed(2),
                                                        " EGP"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/checkout/confirm/page.jsx",
                                                    lineNumber: 533,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/checkout/confirm/page.jsx",
                                            lineNumber: 531,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/checkout/confirm/page.jsx",
                                    lineNumber: 526,
                                    columnNumber: 15
                                }, this),
                                shippingMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                    style: {
                                        color: '#e67e22'
                                    },
                                    children: shippingMessage
                                }, void 0, false, {
                                    fileName: "[project]/app/checkout/confirm/page.jsx",
                                    lineNumber: 536,
                                    columnNumber: 35
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/checkout/confirm/page.jsx",
                            lineNumber: 525,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$checkout$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['modal-actions'],
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$checkout$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['btn-secondary'],
                                    onClick: ()=>setShowConfirmModal(false),
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/app/checkout/confirm/page.jsx",
                                    lineNumber: 540,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$checkout$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]['btn-primary'],
                                    onClick: confirmOrder,
                                    disabled: isPlacingOrder,
                                    children: isPlacingOrder ? 'Confirming...' : 'Save & Confirm Order'
                                }, void 0, false, {
                                    fileName: "[project]/app/checkout/confirm/page.jsx",
                                    lineNumber: 543,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/checkout/confirm/page.jsx",
                            lineNumber: 539,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/checkout/confirm/page.jsx",
                    lineNumber: 420,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/checkout/confirm/page.jsx",
                lineNumber: 419,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/checkout/confirm/page.jsx",
        lineNumber: 326,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_b196a244._.js.map