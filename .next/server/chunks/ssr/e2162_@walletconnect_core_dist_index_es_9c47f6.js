module.exports = {

"[project]/node_modules/@walletconnect/universal-provider/node_modules/@walletconnect/core/dist/index.es.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "CORE_CONTEXT": (()=>J),
    "CORE_DEFAULT": (()=>Xe),
    "CORE_PROTOCOL": (()=>ye),
    "CORE_STORAGE_OPTIONS": (()=>We),
    "CORE_STORAGE_PREFIX": (()=>A),
    "CORE_VERSION": (()=>De),
    "CRYPTO_CLIENT_SEED": (()=>me),
    "CRYPTO_CONTEXT": (()=>Ze),
    "CRYPTO_JWT_TTL": (()=>Qe),
    "Core": (()=>Rn),
    "Crypto": (()=>Yt),
    "ECHO_CONTEXT": (()=>Tt),
    "ECHO_URL": (()=>Ct),
    "EVENTS_CLIENT_API_URL": (()=>xt),
    "EVENTS_STORAGE_CLEANUP_INTERVAL": (()=>Rt),
    "EVENTS_STORAGE_CONTEXT": (()=>St),
    "EVENTS_STORAGE_VERSION": (()=>Pt),
    "EVENT_CLIENT_AUTHENTICATE_ERRORS": (()=>Ns),
    "EVENT_CLIENT_AUTHENTICATE_TRACES": (()=>As),
    "EVENT_CLIENT_CONTEXT": (()=>Rs),
    "EVENT_CLIENT_PAIRING_ERRORS": (()=>$),
    "EVENT_CLIENT_PAIRING_TRACES": (()=>z),
    "EVENT_CLIENT_SESSION_ERRORS": (()=>Os),
    "EVENT_CLIENT_SESSION_TRACES": (()=>xs),
    "EXPIRER_CONTEXT": (()=>ft),
    "EXPIRER_DEFAULT_TTL": (()=>Ps),
    "EXPIRER_EVENTS": (()=>x),
    "EXPIRER_STORAGE_VERSION": (()=>vt),
    "EchoClient": (()=>yi),
    "EventClient": (()=>bi),
    "Expirer": (()=>pi),
    "HISTORY_CONTEXT": (()=>mt),
    "HISTORY_EVENTS": (()=>R),
    "HISTORY_STORAGE_VERSION": (()=>bt),
    "JsonRpcHistory": (()=>di),
    "KEYCHAIN_CONTEXT": (()=>et),
    "KEYCHAIN_STORAGE_VERSION": (()=>tt),
    "KeyChain": (()=>Ht),
    "MESSAGES_CONTEXT": (()=>it),
    "MESSAGES_STORAGE_VERSION": (()=>st),
    "MessageTracker": (()=>Jt),
    "PAIRING_CONTEXT": (()=>yt),
    "PAIRING_DEFAULT_TTL": (()=>Cs),
    "PAIRING_EVENTS": (()=>j),
    "PAIRING_RPC_OPTS": (()=>V),
    "PAIRING_STORAGE_VERSION": (()=>Dt),
    "PENDING_SUB_RESOLUTION_TIMEOUT": (()=>gt),
    "PUBLISHER_CONTEXT": (()=>rt),
    "PUBLISHER_DEFAULT_TTL": (()=>be),
    "Pairing": (()=>ui),
    "RELAYER_CONTEXT": (()=>at),
    "RELAYER_DEFAULT_LOGGER": (()=>ot),
    "RELAYER_DEFAULT_PROTOCOL": (()=>nt),
    "RELAYER_DEFAULT_RELAY_URL": (()=>fe),
    "RELAYER_EVENTS": (()=>v),
    "RELAYER_PROVIDER_EVENTS": (()=>C),
    "RELAYER_RECONNECT_TIMEOUT": (()=>ht),
    "RELAYER_SDK_VERSION": (()=>re),
    "RELAYER_STORAGE_OPTIONS": (()=>ws),
    "RELAYER_SUBSCRIBER_SUFFIX": (()=>ct),
    "RELAYER_TRANSPORT_CUTOFF": (()=>Is),
    "Relayer": (()=>oi),
    "STORE_STORAGE_VERSION": (()=>lt),
    "SUBSCRIBER_CONTEXT": (()=>dt),
    "SUBSCRIBER_DEFAULT_TTL": (()=>Ts),
    "SUBSCRIBER_EVENTS": (()=>T),
    "SUBSCRIBER_STORAGE_VERSION": (()=>pt),
    "Store": (()=>li),
    "Subscriber": (()=>ii),
    "TRANSPORT_TYPES": (()=>M),
    "TRUSTED_VERIFY_URLS": (()=>It),
    "VERIFY_CONTEXT": (()=>_t),
    "VERIFY_SERVER": (()=>X),
    "VERIFY_SERVER_V3": (()=>wt),
    "Verify": (()=>gi),
    "WALLETCONNECT_CLIENT_ID": (()=>ut),
    "WALLETCONNECT_LINK_MODE_APPS": (()=>ve),
    "default": (()=>oe)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$events__$5b$external$5d$__$28$events$2c$__cjs$29$__ = __turbopack_import__("[externals]/events [external] (events, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$heartbeat$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@walletconnect/heartbeat/dist/index.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$keyvaluestorage$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@walletconnect/universal-provider/node_modules/@walletconnect/keyvaluestorage/dist/index.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@walletconnect/logger/dist/index.es.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@walletconnect/time/dist/cjs/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$safe$2d$json$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@walletconnect/safe-json/dist/esm/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$relay$2d$auth$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@walletconnect/universal-provider/node_modules/@walletconnect/relay-auth/dist/index.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/uint8arrays/esm/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$provider$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@walletconnect/jsonrpc-provider/dist/index.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@walletconnect/jsonrpc-utils/dist/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$ws$2d$connection$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@walletconnect/universal-provider/node_modules/@walletconnect/jsonrpc-ws-connection/dist/index.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2e$isequal$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/lodash.isequal/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$window$2d$getters$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@walletconnect/window-getters/dist/cjs/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@walletconnect/utils/dist/index.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@walletconnect/logger/dist/index.es.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$to$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/uint8arrays/esm/src/to-string.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$types$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@walletconnect/types/dist/index.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@walletconnect/jsonrpc-utils/dist/esm/format.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pino$2f$pino$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__pino$3e$__ = __turbopack_import__("[project]/node_modules/pino/pino.js [app-ssr] (ecmascript) <export default as pino>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@walletconnect/jsonrpc-utils/dist/esm/validators.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const ye = "wc", De = 2, J = "core", A = `${ye}@2:${J}:`, Xe = {
    name: J,
    logger: "error"
}, We = {
    database: ":memory:"
}, Ze = "crypto", me = "client_ed25519_seed", Qe = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ONE_DAY"], et = "keychain", tt = "0.3", it = "messages", st = "0.3", be = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SIX_HOURS"], rt = "publisher", nt = "irn", ot = "error", fe = "wss://relay.walletconnect.org", at = "relayer", v = {
    message: "relayer_message",
    message_ack: "relayer_message_ack",
    connect: "relayer_connect",
    disconnect: "relayer_disconnect",
    error: "relayer_error",
    connection_stalled: "relayer_connection_stalled",
    transport_closed: "relayer_transport_closed",
    publish: "relayer_publish"
}, ct = "_subscription", C = {
    payload: "payload",
    connect: "connect",
    disconnect: "disconnect",
    error: "error"
}, ht = .1, ws = {
    database: ":memory:"
}, re = "2.18.0", Is = 1e4, M = {
    link_mode: "link_mode",
    relay: "relay"
}, lt = "0.3", ut = "WALLETCONNECT_CLIENT_ID", ve = "WALLETCONNECT_LINK_MODE_APPS", T = {
    created: "subscription_created",
    deleted: "subscription_deleted",
    expired: "subscription_expired",
    disabled: "subscription_disabled",
    sync: "subscription_sync",
    resubscribed: "subscription_resubscribed"
}, Ts = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["THIRTY_DAYS"], dt = "subscription", pt = "0.3", gt = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FIVE_SECONDS"] * 1e3, yt = "pairing", Dt = "0.3", Cs = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["THIRTY_DAYS"], V = {
    wc_pairingDelete: {
        req: {
            ttl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ONE_DAY"],
            prompt: !1,
            tag: 1e3
        },
        res: {
            ttl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ONE_DAY"],
            prompt: !1,
            tag: 1001
        }
    },
    wc_pairingPing: {
        req: {
            ttl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["THIRTY_SECONDS"],
            prompt: !1,
            tag: 1002
        },
        res: {
            ttl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["THIRTY_SECONDS"],
            prompt: !1,
            tag: 1003
        }
    },
    unregistered_method: {
        req: {
            ttl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ONE_DAY"],
            prompt: !1,
            tag: 0
        },
        res: {
            ttl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ONE_DAY"],
            prompt: !1,
            tag: 0
        }
    }
}, j = {
    create: "pairing_create",
    expire: "pairing_expire",
    delete: "pairing_delete",
    ping: "pairing_ping"
}, R = {
    created: "history_created",
    updated: "history_updated",
    deleted: "history_deleted",
    sync: "history_sync"
}, mt = "history", bt = "0.3", ft = "expirer", x = {
    created: "expirer_created",
    deleted: "expirer_deleted",
    expired: "expirer_expired",
    sync: "expirer_sync"
}, vt = "0.3", Ps = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ONE_DAY"], _t = "verify-api", Ss = "https://verify.walletconnect.com", Et = "https://verify.walletconnect.org", X = Et, wt = `${X}/v3`, It = [
    Ss,
    Et
], Tt = "echo", Ct = "https://echo.walletconnect.com", Rs = "event-client", z = {
    pairing_started: "pairing_started",
    pairing_uri_validation_success: "pairing_uri_validation_success",
    pairing_uri_not_expired: "pairing_uri_not_expired",
    store_new_pairing: "store_new_pairing",
    subscribing_pairing_topic: "subscribing_pairing_topic",
    subscribe_pairing_topic_success: "subscribe_pairing_topic_success",
    existing_pairing: "existing_pairing",
    pairing_not_expired: "pairing_not_expired",
    emit_inactive_pairing: "emit_inactive_pairing",
    emit_session_proposal: "emit_session_proposal",
    subscribing_to_pairing_topic: "subscribing_to_pairing_topic"
}, $ = {
    no_wss_connection: "no_wss_connection",
    no_internet_connection: "no_internet_connection",
    malformed_pairing_uri: "malformed_pairing_uri",
    active_pairing_already_exists: "active_pairing_already_exists",
    subscribe_pairing_topic_failure: "subscribe_pairing_topic_failure",
    pairing_expired: "pairing_expired",
    proposal_expired: "proposal_expired",
    proposal_listener_not_found: "proposal_listener_not_found"
}, xs = {
    session_approve_started: "session_approve_started",
    proposal_not_expired: "proposal_not_expired",
    session_namespaces_validation_success: "session_namespaces_validation_success",
    create_session_topic: "create_session_topic",
    subscribing_session_topic: "subscribing_session_topic",
    subscribe_session_topic_success: "subscribe_session_topic_success",
    publishing_session_approve: "publishing_session_approve",
    session_approve_publish_success: "session_approve_publish_success",
    store_session: "store_session",
    publishing_session_settle: "publishing_session_settle",
    session_settle_publish_success: "session_settle_publish_success"
}, Os = {
    no_internet_connection: "no_internet_connection",
    no_wss_connection: "no_wss_connection",
    proposal_expired: "proposal_expired",
    subscribe_session_topic_failure: "subscribe_session_topic_failure",
    session_approve_publish_failure: "session_approve_publish_failure",
    session_settle_publish_failure: "session_settle_publish_failure",
    session_approve_namespace_validation_failure: "session_approve_namespace_validation_failure",
    proposal_not_found: "proposal_not_found"
}, As = {
    authenticated_session_approve_started: "authenticated_session_approve_started",
    authenticated_session_not_expired: "authenticated_session_not_expired",
    chains_caip2_compliant: "chains_caip2_compliant",
    chains_evm_compliant: "chains_evm_compliant",
    create_authenticated_session_topic: "create_authenticated_session_topic",
    cacaos_verified: "cacaos_verified",
    store_authenticated_session: "store_authenticated_session",
    subscribing_authenticated_session_topic: "subscribing_authenticated_session_topic",
    subscribe_authenticated_session_topic_success: "subscribe_authenticated_session_topic_success",
    publishing_authenticated_session_approve: "publishing_authenticated_session_approve",
    authenticated_session_approve_publish_success: "authenticated_session_approve_publish_success"
}, Ns = {
    no_internet_connection: "no_internet_connection",
    no_wss_connection: "no_wss_connection",
    missing_session_authenticate_request: "missing_session_authenticate_request",
    session_authenticate_request_expired: "session_authenticate_request_expired",
    chains_caip2_compliant_failure: "chains_caip2_compliant_failure",
    chains_evm_compliant_failure: "chains_evm_compliant_failure",
    invalid_cacao: "invalid_cacao",
    subscribe_authenticated_session_topic_failure: "subscribe_authenticated_session_topic_failure",
    authenticated_session_approve_publish_failure: "authenticated_session_approve_publish_failure",
    authenticated_session_pending_request_not_found: "authenticated_session_pending_request_not_found"
}, Pt = .1, St = "event-client", Rt = 86400, xt = "https://pulse.walletconnect.org/batch";
function zs(o, e) {
    if (o.length >= 255) throw new TypeError("Alphabet too long");
    for(var t = new Uint8Array(256), s = 0; s < t.length; s++)t[s] = 255;
    for(var i = 0; i < o.length; i++){
        var r = o.charAt(i), n = r.charCodeAt(0);
        if (t[n] !== 255) throw new TypeError(r + " is ambiguous");
        t[n] = i;
    }
    var a = o.length, c = o.charAt(0), h = Math.log(a) / Math.log(256), u = Math.log(256) / Math.log(a);
    function d(l) {
        if (l instanceof Uint8Array || (ArrayBuffer.isView(l) ? l = new Uint8Array(l.buffer, l.byteOffset, l.byteLength) : Array.isArray(l) && (l = Uint8Array.from(l))), !(l instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
        if (l.length === 0) return "";
        for(var g = 0, w = 0, b = 0, D = l.length; b !== D && l[b] === 0;)b++, g++;
        for(var P = (D - b) * u + 1 >>> 0, f = new Uint8Array(P); b !== D;){
            for(var N = l[b], k = 0, O = P - 1; (N !== 0 || k < w) && O !== -1; O--, k++)N += 256 * f[O] >>> 0, f[O] = N % a >>> 0, N = N / a >>> 0;
            if (N !== 0) throw new Error("Non-zero carry");
            w = k, b++;
        }
        for(var L = P - w; L !== P && f[L] === 0;)L++;
        for(var ee = c.repeat(g); L < P; ++L)ee += o.charAt(f[L]);
        return ee;
    }
    function y(l) {
        if (typeof l != "string") throw new TypeError("Expected String");
        if (l.length === 0) return new Uint8Array;
        var g = 0;
        if (l[g] !== " ") {
            for(var w = 0, b = 0; l[g] === c;)w++, g++;
            for(var D = (l.length - g) * h + 1 >>> 0, P = new Uint8Array(D); l[g];){
                var f = t[l.charCodeAt(g)];
                if (f === 255) return;
                for(var N = 0, k = D - 1; (f !== 0 || N < b) && k !== -1; k--, N++)f += a * P[k] >>> 0, P[k] = f % 256 >>> 0, f = f / 256 >>> 0;
                if (f !== 0) throw new Error("Non-zero carry");
                b = N, g++;
            }
            if (l[g] !== " ") {
                for(var O = D - b; O !== D && P[O] === 0;)O++;
                for(var L = new Uint8Array(w + (D - O)), ee = w; O !== D;)L[ee++] = P[O++];
                return L;
            }
        }
    }
    function m(l) {
        var g = y(l);
        if (g) return g;
        throw new Error(`Non-${e} character`);
    }
    return {
        encode: d,
        decodeUnsafe: y,
        decode: m
    };
}
var Ls = zs, $s = Ls;
const Ot = (o)=>{
    if (o instanceof Uint8Array && o.constructor.name === "Uint8Array") return o;
    if (o instanceof ArrayBuffer) return new Uint8Array(o);
    if (ArrayBuffer.isView(o)) return new Uint8Array(o.buffer, o.byteOffset, o.byteLength);
    throw new Error("Unknown type, must be binary type");
}, ks = (o)=>new TextEncoder().encode(o), Us = (o)=>new TextDecoder().decode(o);
class Fs {
    constructor(e, t, s){
        this.name = e, this.prefix = t, this.baseEncode = s;
    }
    encode(e) {
        if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
        throw Error("Unknown type, must be binary type");
    }
}
class Ms {
    constructor(e, t, s){
        if (this.name = e, this.prefix = t, t.codePointAt(0) === void 0) throw new Error("Invalid prefix character");
        this.prefixCodePoint = t.codePointAt(0), this.baseDecode = s;
    }
    decode(e) {
        if (typeof e == "string") {
            if (e.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
            return this.baseDecode(e.slice(this.prefix.length));
        } else throw Error("Can only multibase decode strings");
    }
    or(e) {
        return At(this, e);
    }
}
class Ks {
    constructor(e){
        this.decoders = e;
    }
    or(e) {
        return At(this, e);
    }
    decode(e) {
        const t = e[0], s = this.decoders[t];
        if (s) return s.decode(e);
        throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
    }
}
const At = (o, e)=>new Ks({
        ...o.decoders || {
            [o.prefix]: o
        },
        ...e.decoders || {
            [e.prefix]: e
        }
    });
class Bs {
    constructor(e, t, s, i){
        this.name = e, this.prefix = t, this.baseEncode = s, this.baseDecode = i, this.encoder = new Fs(e, t, s), this.decoder = new Ms(e, t, i);
    }
    encode(e) {
        return this.encoder.encode(e);
    }
    decode(e) {
        return this.decoder.decode(e);
    }
}
const ne = ({ name: o, prefix: e, encode: t, decode: s })=>new Bs(o, e, t, s), W = ({ prefix: o, name: e, alphabet: t })=>{
    const { encode: s, decode: i } = $s(t, e);
    return ne({
        prefix: o,
        name: e,
        encode: s,
        decode: (r)=>Ot(i(r))
    });
}, Vs = (o, e, t, s)=>{
    const i = {};
    for(let u = 0; u < e.length; ++u)i[e[u]] = u;
    let r = o.length;
    for(; o[r - 1] === "=";)--r;
    const n = new Uint8Array(r * t / 8 | 0);
    let a = 0, c = 0, h = 0;
    for(let u = 0; u < r; ++u){
        const d = i[o[u]];
        if (d === void 0) throw new SyntaxError(`Non-${s} character`);
        c = c << t | d, a += t, a >= 8 && (a -= 8, n[h++] = 255 & c >> a);
    }
    if (a >= t || 255 & c << 8 - a) throw new SyntaxError("Unexpected end of data");
    return n;
}, js = (o, e, t)=>{
    const s = e[e.length - 1] === "=", i = (1 << t) - 1;
    let r = "", n = 0, a = 0;
    for(let c = 0; c < o.length; ++c)for(a = a << 8 | o[c], n += 8; n > t;)n -= t, r += e[i & a >> n];
    if (n && (r += e[i & a << t - n]), s) for(; r.length * t & 7;)r += "=";
    return r;
}, _ = ({ name: o, prefix: e, bitsPerChar: t, alphabet: s })=>ne({
        prefix: e,
        name: o,
        encode (i) {
            return js(i, s, t);
        },
        decode (i) {
            return Vs(i, s, t, o);
        }
    }), qs = ne({
    prefix: "\0",
    name: "identity",
    encode: (o)=>Us(o),
    decode: (o)=>ks(o)
});
var Gs = Object.freeze({
    __proto__: null,
    identity: qs
});
const Hs = _({
    prefix: "0",
    name: "base2",
    alphabet: "01",
    bitsPerChar: 1
});
var Ys = Object.freeze({
    __proto__: null,
    base2: Hs
});
const Js = _({
    prefix: "7",
    name: "base8",
    alphabet: "01234567",
    bitsPerChar: 3
});
var Xs = Object.freeze({
    __proto__: null,
    base8: Js
});
const Ws = W({
    prefix: "9",
    name: "base10",
    alphabet: "0123456789"
});
var Zs = Object.freeze({
    __proto__: null,
    base10: Ws
});
const Qs = _({
    prefix: "f",
    name: "base16",
    alphabet: "0123456789abcdef",
    bitsPerChar: 4
}), er = _({
    prefix: "F",
    name: "base16upper",
    alphabet: "0123456789ABCDEF",
    bitsPerChar: 4
});
var tr = Object.freeze({
    __proto__: null,
    base16: Qs,
    base16upper: er
});
const ir = _({
    prefix: "b",
    name: "base32",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
    bitsPerChar: 5
}), sr = _({
    prefix: "B",
    name: "base32upper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
    bitsPerChar: 5
}), rr = _({
    prefix: "c",
    name: "base32pad",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
    bitsPerChar: 5
}), nr = _({
    prefix: "C",
    name: "base32padupper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
    bitsPerChar: 5
}), or = _({
    prefix: "v",
    name: "base32hex",
    alphabet: "0123456789abcdefghijklmnopqrstuv",
    bitsPerChar: 5
}), ar = _({
    prefix: "V",
    name: "base32hexupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
    bitsPerChar: 5
}), cr = _({
    prefix: "t",
    name: "base32hexpad",
    alphabet: "0123456789abcdefghijklmnopqrstuv=",
    bitsPerChar: 5
}), hr = _({
    prefix: "T",
    name: "base32hexpadupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
    bitsPerChar: 5
}), lr = _({
    prefix: "h",
    name: "base32z",
    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
    bitsPerChar: 5
});
var ur = Object.freeze({
    __proto__: null,
    base32: ir,
    base32upper: sr,
    base32pad: rr,
    base32padupper: nr,
    base32hex: or,
    base32hexupper: ar,
    base32hexpad: cr,
    base32hexpadupper: hr,
    base32z: lr
});
const dr = W({
    prefix: "k",
    name: "base36",
    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
}), pr = W({
    prefix: "K",
    name: "base36upper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
});
var gr = Object.freeze({
    __proto__: null,
    base36: dr,
    base36upper: pr
});
const yr = W({
    name: "base58btc",
    prefix: "z",
    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
}), Dr = W({
    name: "base58flickr",
    prefix: "Z",
    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
});
var mr = Object.freeze({
    __proto__: null,
    base58btc: yr,
    base58flickr: Dr
});
const br = _({
    prefix: "m",
    name: "base64",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    bitsPerChar: 6
}), fr = _({
    prefix: "M",
    name: "base64pad",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    bitsPerChar: 6
}), vr = _({
    prefix: "u",
    name: "base64url",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
    bitsPerChar: 6
}), _r = _({
    prefix: "U",
    name: "base64urlpad",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
    bitsPerChar: 6
});
var Er = Object.freeze({
    __proto__: null,
    base64: br,
    base64pad: fr,
    base64url: vr,
    base64urlpad: _r
});
const Nt = Array.from("\u{1F680}\u{1FA90}\u2604\u{1F6F0}\u{1F30C}\u{1F311}\u{1F312}\u{1F313}\u{1F314}\u{1F315}\u{1F316}\u{1F317}\u{1F318}\u{1F30D}\u{1F30F}\u{1F30E}\u{1F409}\u2600\u{1F4BB}\u{1F5A5}\u{1F4BE}\u{1F4BF}\u{1F602}\u2764\u{1F60D}\u{1F923}\u{1F60A}\u{1F64F}\u{1F495}\u{1F62D}\u{1F618}\u{1F44D}\u{1F605}\u{1F44F}\u{1F601}\u{1F525}\u{1F970}\u{1F494}\u{1F496}\u{1F499}\u{1F622}\u{1F914}\u{1F606}\u{1F644}\u{1F4AA}\u{1F609}\u263A\u{1F44C}\u{1F917}\u{1F49C}\u{1F614}\u{1F60E}\u{1F607}\u{1F339}\u{1F926}\u{1F389}\u{1F49E}\u270C\u2728\u{1F937}\u{1F631}\u{1F60C}\u{1F338}\u{1F64C}\u{1F60B}\u{1F497}\u{1F49A}\u{1F60F}\u{1F49B}\u{1F642}\u{1F493}\u{1F929}\u{1F604}\u{1F600}\u{1F5A4}\u{1F603}\u{1F4AF}\u{1F648}\u{1F447}\u{1F3B6}\u{1F612}\u{1F92D}\u2763\u{1F61C}\u{1F48B}\u{1F440}\u{1F62A}\u{1F611}\u{1F4A5}\u{1F64B}\u{1F61E}\u{1F629}\u{1F621}\u{1F92A}\u{1F44A}\u{1F973}\u{1F625}\u{1F924}\u{1F449}\u{1F483}\u{1F633}\u270B\u{1F61A}\u{1F61D}\u{1F634}\u{1F31F}\u{1F62C}\u{1F643}\u{1F340}\u{1F337}\u{1F63B}\u{1F613}\u2B50\u2705\u{1F97A}\u{1F308}\u{1F608}\u{1F918}\u{1F4A6}\u2714\u{1F623}\u{1F3C3}\u{1F490}\u2639\u{1F38A}\u{1F498}\u{1F620}\u261D\u{1F615}\u{1F33A}\u{1F382}\u{1F33B}\u{1F610}\u{1F595}\u{1F49D}\u{1F64A}\u{1F639}\u{1F5E3}\u{1F4AB}\u{1F480}\u{1F451}\u{1F3B5}\u{1F91E}\u{1F61B}\u{1F534}\u{1F624}\u{1F33C}\u{1F62B}\u26BD\u{1F919}\u2615\u{1F3C6}\u{1F92B}\u{1F448}\u{1F62E}\u{1F646}\u{1F37B}\u{1F343}\u{1F436}\u{1F481}\u{1F632}\u{1F33F}\u{1F9E1}\u{1F381}\u26A1\u{1F31E}\u{1F388}\u274C\u270A\u{1F44B}\u{1F630}\u{1F928}\u{1F636}\u{1F91D}\u{1F6B6}\u{1F4B0}\u{1F353}\u{1F4A2}\u{1F91F}\u{1F641}\u{1F6A8}\u{1F4A8}\u{1F92C}\u2708\u{1F380}\u{1F37A}\u{1F913}\u{1F619}\u{1F49F}\u{1F331}\u{1F616}\u{1F476}\u{1F974}\u25B6\u27A1\u2753\u{1F48E}\u{1F4B8}\u2B07\u{1F628}\u{1F31A}\u{1F98B}\u{1F637}\u{1F57A}\u26A0\u{1F645}\u{1F61F}\u{1F635}\u{1F44E}\u{1F932}\u{1F920}\u{1F927}\u{1F4CC}\u{1F535}\u{1F485}\u{1F9D0}\u{1F43E}\u{1F352}\u{1F617}\u{1F911}\u{1F30A}\u{1F92F}\u{1F437}\u260E\u{1F4A7}\u{1F62F}\u{1F486}\u{1F446}\u{1F3A4}\u{1F647}\u{1F351}\u2744\u{1F334}\u{1F4A3}\u{1F438}\u{1F48C}\u{1F4CD}\u{1F940}\u{1F922}\u{1F445}\u{1F4A1}\u{1F4A9}\u{1F450}\u{1F4F8}\u{1F47B}\u{1F910}\u{1F92E}\u{1F3BC}\u{1F975}\u{1F6A9}\u{1F34E}\u{1F34A}\u{1F47C}\u{1F48D}\u{1F4E3}\u{1F942}"), wr = Nt.reduce((o, e, t)=>(o[t] = e, o), []), Ir = Nt.reduce((o, e, t)=>(o[e.codePointAt(0)] = t, o), []);
function Tr(o) {
    return o.reduce((e, t)=>(e += wr[t], e), "");
}
function Cr(o) {
    const e = [];
    for (const t of o){
        const s = Ir[t.codePointAt(0)];
        if (s === void 0) throw new Error(`Non-base256emoji character: ${t}`);
        e.push(s);
    }
    return new Uint8Array(e);
}
const Pr = ne({
    prefix: "\u{1F680}",
    name: "base256emoji",
    encode: Tr,
    decode: Cr
});
var Sr = Object.freeze({
    __proto__: null,
    base256emoji: Pr
}), Rr = Lt, zt = 128, xr = 127, Or = ~xr, Ar = Math.pow(2, 31);
function Lt(o, e, t) {
    e = e || [], t = t || 0;
    for(var s = t; o >= Ar;)e[t++] = o & 255 | zt, o /= 128;
    for(; o & Or;)e[t++] = o & 255 | zt, o >>>= 7;
    return e[t] = o | 0, Lt.bytes = t - s + 1, e;
}
var Nr = _e, zr = 128, $t = 127;
function _e(o, s) {
    var t = 0, s = s || 0, i = 0, r = s, n, a = o.length;
    do {
        if (r >= a) throw _e.bytes = 0, new RangeError("Could not decode varint");
        n = o[r++], t += i < 28 ? (n & $t) << i : (n & $t) * Math.pow(2, i), i += 7;
    }while (n >= zr)
    return _e.bytes = r - s, t;
}
var Lr = Math.pow(2, 7), $r = Math.pow(2, 14), kr = Math.pow(2, 21), Ur = Math.pow(2, 28), Fr = Math.pow(2, 35), Mr = Math.pow(2, 42), Kr = Math.pow(2, 49), Br = Math.pow(2, 56), Vr = Math.pow(2, 63), jr = function(o) {
    return o < Lr ? 1 : o < $r ? 2 : o < kr ? 3 : o < Ur ? 4 : o < Fr ? 5 : o < Mr ? 6 : o < Kr ? 7 : o < Br ? 8 : o < Vr ? 9 : 10;
}, qr = {
    encode: Rr,
    decode: Nr,
    encodingLength: jr
}, kt = qr;
const Ut = (o, e, t = 0)=>(kt.encode(o, e, t), e), Ft = (o)=>kt.encodingLength(o), Ee = (o, e)=>{
    const t = e.byteLength, s = Ft(o), i = s + Ft(t), r = new Uint8Array(i + t);
    return Ut(o, r, 0), Ut(t, r, s), r.set(e, i), new Gr(o, t, e, r);
};
class Gr {
    constructor(e, t, s, i){
        this.code = e, this.size = t, this.digest = s, this.bytes = i;
    }
}
const Mt = ({ name: o, code: e, encode: t })=>new Hr(o, e, t);
class Hr {
    constructor(e, t, s){
        this.name = e, this.code = t, this.encode = s;
    }
    digest(e) {
        if (e instanceof Uint8Array) {
            const t = this.encode(e);
            return t instanceof Uint8Array ? Ee(this.code, t) : t.then((s)=>Ee(this.code, s));
        } else throw Error("Unknown type, must be binary type");
    }
}
const Kt = (o)=>async (e)=>new Uint8Array(await crypto.subtle.digest(o, e)), Yr = Mt({
    name: "sha2-256",
    code: 18,
    encode: Kt("SHA-256")
}), Jr = Mt({
    name: "sha2-512",
    code: 19,
    encode: Kt("SHA-512")
});
var Xr = Object.freeze({
    __proto__: null,
    sha256: Yr,
    sha512: Jr
});
const Bt = 0, Wr = "identity", Vt = Ot, Zr = (o)=>Ee(Bt, Vt(o)), Qr = {
    code: Bt,
    name: Wr,
    encode: Vt,
    digest: Zr
};
var en = Object.freeze({
    __proto__: null,
    identity: Qr
});
new TextEncoder, new TextDecoder;
const jt = {
    ...Gs,
    ...Ys,
    ...Xs,
    ...Zs,
    ...tr,
    ...ur,
    ...gr,
    ...mr,
    ...Er,
    ...Sr
};
({
    ...Xr,
    ...en
});
function tn(o = 0) {
    return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? globalThis.Buffer.allocUnsafe(o) : new Uint8Array(o);
}
function qt(o, e, t, s) {
    return {
        name: o,
        prefix: e,
        encoder: {
            name: o,
            prefix: e,
            encode: t
        },
        decoder: {
            decode: s
        }
    };
}
const Gt = qt("utf8", "u", (o)=>"u" + new TextDecoder("utf8").decode(o), (o)=>new TextEncoder().encode(o.substring(1))), we = qt("ascii", "a", (o)=>{
    let e = "a";
    for(let t = 0; t < o.length; t++)e += String.fromCharCode(o[t]);
    return e;
}, (o)=>{
    o = o.substring(1);
    const e = tn(o.length);
    for(let t = 0; t < o.length; t++)e[t] = o.charCodeAt(t);
    return e;
}), sn = {
    utf8: Gt,
    "utf-8": Gt,
    hex: jt.base16,
    latin1: we,
    ascii: we,
    binary: we,
    ...jt
};
function rn(o, e = "utf8") {
    const t = sn[e];
    if (!t) throw new Error(`Unsupported encoding "${e}"`);
    return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(o, "utf8") : t.decoder.decode(`${t.prefix}${o}`);
}
class Ht {
    constructor(e, t){
        this.core = e, this.logger = t, this.keychain = new Map, this.name = et, this.version = tt, this.initialized = !1, this.storagePrefix = A, this.init = async ()=>{
            if (!this.initialized) {
                const s = await this.getKeyChain();
                typeof s < "u" && (this.keychain = s), this.initialized = !0;
            }
        }, this.has = (s)=>(this.isInitialized(), this.keychain.has(s)), this.set = async (s, i)=>{
            this.isInitialized(), this.keychain.set(s, i), await this.persist();
        }, this.get = (s)=>{
            this.isInitialized();
            const i = this.keychain.get(s);
            if (typeof i > "u") {
                const { message: r } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("NO_MATCHING_KEY", `${this.name}: ${s}`);
                throw new Error(r);
            }
            return i;
        }, this.del = async (s)=>{
            this.isInitialized(), this.keychain.delete(s), await this.persist();
        }, this.core = e, this.logger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateChildLogger"])(t, this.name);
    }
    get context() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getLoggerContext"])(this.logger);
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
    }
    async setKeyChain(e) {
        await this.core.storage.setItem(this.storageKey, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mapToObj"])(e));
    }
    async getKeyChain() {
        const e = await this.core.storage.getItem(this.storageKey);
        return typeof e < "u" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["objToMap"])(e) : void 0;
    }
    async persist() {
        await this.setKeyChain(this.keychain);
    }
    isInitialized() {
        if (!this.initialized) {
            const { message: e } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("NOT_INITIALIZED", this.name);
            throw new Error(e);
        }
    }
}
class Yt {
    constructor(e, t, s){
        this.core = e, this.logger = t, this.name = Ze, this.randomSessionIdentifier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateRandomBytes32"])(), this.initialized = !1, this.init = async ()=>{
            this.initialized || (await this.keychain.init(), this.initialized = !0);
        }, this.hasKeys = (i)=>(this.isInitialized(), this.keychain.has(i)), this.getClientId = async ()=>{
            this.isInitialized();
            const i = await this.getClientSeed(), r = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$relay$2d$auth$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.generateKeyPair(i);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$relay$2d$auth$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.encodeIss(r.publicKey);
        }, this.generateKeyPair = ()=>{
            this.isInitialized();
            const i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateKeyPair"])();
            return this.setPrivateKey(i.publicKey, i.privateKey);
        }, this.signJWT = async (i)=>{
            this.isInitialized();
            const r = await this.getClientSeed(), n = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$relay$2d$auth$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.generateKeyPair(r), a = this.randomSessionIdentifier, c = Qe;
            return await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$relay$2d$auth$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.signJWT(a, i, c, n);
        }, this.generateSharedKey = (i, r, n)=>{
            this.isInitialized();
            const a = this.getPrivateKey(i), c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deriveSymKey"])(a, r);
            return this.setSymKey(c, n);
        }, this.setSymKey = async (i, r)=>{
            this.isInitialized();
            const n = r || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hashKey"])(i);
            return await this.keychain.set(n, i), n;
        }, this.deleteKeyPair = async (i)=>{
            this.isInitialized(), await this.keychain.del(i);
        }, this.deleteSymKey = async (i)=>{
            this.isInitialized(), await this.keychain.del(i);
        }, this.encode = async (i, r, n)=>{
            this.isInitialized();
            const a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateEncoding"])(n), c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$safe$2d$json$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeJsonStringify"])(r);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTypeTwoEnvelope"])(a)) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeTypeTwoEnvelope"])(c, n?.encoding);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTypeOneEnvelope"])(a)) {
                const y = a.senderPublicKey, m = a.receiverPublicKey;
                i = await this.generateSharedKey(y, m);
            }
            const h = this.getSymKey(i), { type: u, senderPublicKey: d } = a;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encrypt"])({
                type: u,
                symKey: h,
                message: c,
                senderPublicKey: d,
                encoding: n?.encoding
            });
        }, this.decode = async (i, r, n)=>{
            this.isInitialized();
            const a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateDecoding"])(r, n);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTypeTwoEnvelope"])(a)) {
                const c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeTypeTwoEnvelope"])(r, n?.encoding);
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$safe$2d$json$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeJsonParse"])(c);
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTypeOneEnvelope"])(a)) {
                const c = a.receiverPublicKey, h = a.senderPublicKey;
                i = await this.generateSharedKey(c, h);
            }
            try {
                const c = this.getSymKey(i), h = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decrypt"])({
                    symKey: c,
                    encoded: r,
                    encoding: n?.encoding
                });
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$safe$2d$json$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeJsonParse"])(h);
            } catch (c) {
                this.logger.error(`Failed to decode message from topic: '${i}', clientId: '${await this.getClientId()}'`), this.logger.error(c);
            }
        }, this.getPayloadType = (i, r = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BASE64"])=>{
            const n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deserialize"])({
                encoded: i,
                encoding: r
            });
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeTypeByte"])(n.type);
        }, this.getPayloadSenderPublicKey = (i, r = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BASE64"])=>{
            const n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deserialize"])({
                encoded: i,
                encoding: r
            });
            return n.senderPublicKey ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$to$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toString"])(n.senderPublicKey, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BASE16"]) : void 0;
        }, this.core = e, this.logger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateChildLogger"])(t, this.name), this.keychain = s || new Ht(this.core, this.logger);
    }
    get context() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getLoggerContext"])(this.logger);
    }
    async setPrivateKey(e, t) {
        return await this.keychain.set(e, t), e;
    }
    getPrivateKey(e) {
        return this.keychain.get(e);
    }
    async getClientSeed() {
        let e = "";
        try {
            e = this.keychain.get(me);
        } catch  {
            e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateRandomBytes32"])(), await this.keychain.set(me, e);
        }
        return rn(e, "base16");
    }
    getSymKey(e) {
        return this.keychain.get(e);
    }
    isInitialized() {
        if (!this.initialized) {
            const { message: e } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("NOT_INITIALIZED", this.name);
            throw new Error(e);
        }
    }
}
class Jt extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$types$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IMessageTracker"] {
    constructor(e, t){
        super(e, t), this.logger = e, this.core = t, this.messages = new Map, this.name = it, this.version = st, this.initialized = !1, this.storagePrefix = A, this.init = async ()=>{
            if (!this.initialized) {
                this.logger.trace("Initialized");
                try {
                    const s = await this.getRelayerMessages();
                    typeof s < "u" && (this.messages = s), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({
                        type: "method",
                        method: "restore",
                        size: this.messages.size
                    });
                } catch (s) {
                    this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(s);
                } finally{
                    this.initialized = !0;
                }
            }
        }, this.set = async (s, i)=>{
            this.isInitialized();
            const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hashMessage"])(i);
            let n = this.messages.get(s);
            return typeof n > "u" && (n = {}), typeof n[r] < "u" || (n[r] = i, this.messages.set(s, n), await this.persist()), r;
        }, this.get = (s)=>{
            this.isInitialized();
            let i = this.messages.get(s);
            return typeof i > "u" && (i = {}), i;
        }, this.has = (s, i)=>{
            this.isInitialized();
            const r = this.get(s), n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hashMessage"])(i);
            return typeof r[n] < "u";
        }, this.del = async (s)=>{
            this.isInitialized(), this.messages.delete(s), await this.persist();
        }, this.logger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateChildLogger"])(e, this.name), this.core = t;
    }
    get context() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getLoggerContext"])(this.logger);
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
    }
    async setRelayerMessages(e) {
        await this.core.storage.setItem(this.storageKey, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mapToObj"])(e));
    }
    async getRelayerMessages() {
        const e = await this.core.storage.getItem(this.storageKey);
        return typeof e < "u" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["objToMap"])(e) : void 0;
    }
    async persist() {
        await this.setRelayerMessages(this.messages);
    }
    isInitialized() {
        if (!this.initialized) {
            const { message: e } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("NOT_INITIALIZED", this.name);
            throw new Error(e);
        }
    }
}
var nn = Object.defineProperty, on = Object.defineProperties, an = Object.getOwnPropertyDescriptors, Xt = Object.getOwnPropertySymbols, cn = Object.prototype.hasOwnProperty, hn = Object.prototype.propertyIsEnumerable, Wt = (o, e, t)=>e in o ? nn(o, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : o[e] = t, Zt = (o, e)=>{
    for(var t in e || (e = {}))cn.call(e, t) && Wt(o, t, e[t]);
    if (Xt) for (var t of Xt(e))hn.call(e, t) && Wt(o, t, e[t]);
    return o;
}, Qt = (o, e)=>on(o, an(e));
class ln extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$types$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IPublisher"] {
    constructor(e, t){
        super(e, t), this.relayer = e, this.logger = t, this.events = new __TURBOPACK__imported__module__$5b$externals$5d2f$events__$5b$external$5d$__$28$events$2c$__cjs$29$__["EventEmitter"], this.name = rt, this.queue = new Map, this.publishTimeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toMiliseconds"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ONE_MINUTE"]), this.initialPublishTimeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toMiliseconds"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ONE_SECOND"] * 15), this.needsTransportRestart = !1, this.publish = async (s, i, r)=>{
            var n;
            this.logger.debug("Publishing Payload"), this.logger.trace({
                type: "method",
                method: "publish",
                params: {
                    topic: s,
                    message: i,
                    opts: r
                }
            });
            const a = r?.ttl || be, c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRelayProtocolName"])(r), h = r?.prompt || !1, u = r?.tag || 0, d = r?.id || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBigIntRpcId"])().toString(), y = {
                topic: s,
                message: i,
                opts: {
                    ttl: a,
                    relay: c,
                    prompt: h,
                    tag: u,
                    id: d,
                    attestation: r?.attestation
                }
            }, m = `Failed to publish payload, please try again. id:${d} tag:${u}`;
            try {
                const l = new Promise(async (g)=>{
                    const w = ({ id: D })=>{
                        y.opts.id === D && (this.removeRequestFromQueue(D), this.relayer.events.removeListener(v.publish, w), g(y));
                    };
                    this.relayer.events.on(v.publish, w);
                    const b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createExpiringPromise"])(new Promise((D, P)=>{
                        this.rpcPublish({
                            topic: s,
                            message: i,
                            ttl: a,
                            prompt: h,
                            tag: u,
                            id: d,
                            attestation: r?.attestation
                        }).then(D).catch((f)=>{
                            this.logger.warn(f, f?.message), P(f);
                        });
                    }), this.initialPublishTimeout, `Failed initial publish, retrying.... id:${d} tag:${u}`);
                    try {
                        await b, this.events.removeListener(v.publish, w);
                    } catch (D) {
                        this.queue.set(d, Qt(Zt({}, y), {
                            attempt: 1
                        })), this.logger.warn(D, D?.message);
                    }
                });
                this.logger.trace({
                    type: "method",
                    method: "publish",
                    params: {
                        id: d,
                        topic: s,
                        message: i,
                        opts: r
                    }
                }), await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createExpiringPromise"])(l, this.publishTimeout, m);
            } catch (l) {
                if (this.logger.debug("Failed to Publish Payload"), this.logger.error(l), (n = r?.internal) != null && n.throwOnFailedPublish) throw l;
            } finally{
                this.queue.delete(d);
            }
        }, this.on = (s, i)=>{
            this.events.on(s, i);
        }, this.once = (s, i)=>{
            this.events.once(s, i);
        }, this.off = (s, i)=>{
            this.events.off(s, i);
        }, this.removeListener = (s, i)=>{
            this.events.removeListener(s, i);
        }, this.relayer = e, this.logger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateChildLogger"])(t, this.name), this.registerEventListeners();
    }
    get context() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getLoggerContext"])(this.logger);
    }
    async rpcPublish(e) {
        var t, s, i, r;
        const { topic: n, message: a, ttl: c = be, prompt: h, tag: u, id: d, attestation: y } = e, m = {
            method: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRelayProtocolApi"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRelayProtocolName"])().protocol).publish,
            params: {
                topic: n,
                message: a,
                ttl: c,
                prompt: h,
                tag: u,
                attestation: y
            },
            id: d
        };
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isUndefined"])((t = m.params) == null ? void 0 : t.prompt) && ((s = m.params) == null || delete s.prompt), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isUndefined"])((i = m.params) == null ? void 0 : i.tag) && ((r = m.params) == null || delete r.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
            type: "message",
            direction: "outgoing",
            request: m
        });
        const l = await this.relayer.request(m);
        return this.relayer.events.emit(v.publish, e), this.logger.debug("Successfully Published Payload"), l;
    }
    removeRequestFromQueue(e) {
        this.queue.delete(e);
    }
    checkQueue() {
        this.queue.forEach(async (e, t)=>{
            const s = e.attempt + 1;
            this.queue.set(t, Qt(Zt({}, e), {
                attempt: s
            }));
            const { topic: i, message: r, opts: n, attestation: a } = e;
            this.logger.warn({}, `Publisher: queue->publishing: ${e.opts.id}, tag: ${e.opts.tag}, attempt: ${s}`), await this.rpcPublish({
                topic: i,
                message: r,
                ttl: n.ttl,
                prompt: n.prompt,
                tag: n.tag,
                id: n.id,
                attestation: a
            }), this.logger.warn({}, `Publisher: queue->published: ${e.opts.id}`);
        });
    }
    registerEventListeners() {
        this.relayer.core.heartbeat.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$heartbeat$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HEARTBEAT_EVENTS"].pulse, ()=>{
            if (this.needsTransportRestart) {
                this.needsTransportRestart = !1, this.relayer.events.emit(v.connection_stalled);
                return;
            }
            this.checkQueue();
        }), this.relayer.on(v.message_ack, (e)=>{
            this.removeRequestFromQueue(e.id.toString());
        });
    }
}
class un {
    constructor(){
        this.map = new Map, this.set = (e, t)=>{
            const s = this.get(e);
            this.exists(e, t) || this.map.set(e, [
                ...s,
                t
            ]);
        }, this.get = (e)=>this.map.get(e) || [], this.exists = (e, t)=>this.get(e).includes(t), this.delete = (e, t)=>{
            if (typeof t > "u") {
                this.map.delete(e);
                return;
            }
            if (!this.map.has(e)) return;
            const s = this.get(e);
            if (!this.exists(e, t)) return;
            const i = s.filter((r)=>r !== t);
            if (!i.length) {
                this.map.delete(e);
                return;
            }
            this.map.set(e, i);
        }, this.clear = ()=>{
            this.map.clear();
        };
    }
    get topics() {
        return Array.from(this.map.keys());
    }
}
var dn = Object.defineProperty, pn = Object.defineProperties, gn = Object.getOwnPropertyDescriptors, ei = Object.getOwnPropertySymbols, yn = Object.prototype.hasOwnProperty, Dn = Object.prototype.propertyIsEnumerable, ti = (o, e, t)=>e in o ? dn(o, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : o[e] = t, Z = (o, e)=>{
    for(var t in e || (e = {}))yn.call(e, t) && ti(o, t, e[t]);
    if (ei) for (var t of ei(e))Dn.call(e, t) && ti(o, t, e[t]);
    return o;
}, Ie = (o, e)=>pn(o, gn(e));
class ii extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$types$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ISubscriber"] {
    constructor(e, t){
        super(e, t), this.relayer = e, this.logger = t, this.subscriptions = new Map, this.topicMap = new un, this.events = new __TURBOPACK__imported__module__$5b$externals$5d2f$events__$5b$external$5d$__$28$events$2c$__cjs$29$__["EventEmitter"], this.name = dt, this.version = pt, this.pending = new Map, this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = A, this.subscribeTimeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toMiliseconds"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ONE_MINUTE"]), this.initialSubscribeTimeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toMiliseconds"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ONE_SECOND"] * 15), this.batchSubscribeTopicsLimit = 500, this.init = async ()=>{
            this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), this.clientId = await this.relayer.core.crypto.getClientId(), await this.restore()), this.initialized = !0;
        }, this.subscribe = async (s, i)=>{
            this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({
                type: "method",
                method: "subscribe",
                params: {
                    topic: s,
                    opts: i
                }
            });
            try {
                const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRelayProtocolName"])(i), n = {
                    topic: s,
                    relay: r,
                    transportType: i?.transportType
                };
                this.pending.set(s, n);
                const a = await this.rpcSubscribe(s, r, i);
                return typeof a == "string" && (this.onSubscribe(a, n), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({
                    type: "method",
                    method: "subscribe",
                    params: {
                        topic: s,
                        opts: i
                    }
                })), a;
            } catch (r) {
                throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(r), r;
            }
        }, this.unsubscribe = async (s, i)=>{
            await this.restartToComplete(), this.isInitialized(), typeof i?.id < "u" ? await this.unsubscribeById(s, i.id, i) : await this.unsubscribeByTopic(s, i);
        }, this.isSubscribed = async (s)=>{
            if (this.topics.includes(s)) return !0;
            const i = `${this.pendingSubscriptionWatchLabel}_${s}`;
            return await new Promise((r, n)=>{
                const a = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Watch"];
                a.start(i);
                const c = setInterval(()=>{
                    (!this.pending.has(s) && this.topics.includes(s) || this.cached.some((h)=>h.topic === s)) && (clearInterval(c), a.stop(i), r(!0)), a.elapsed(i) >= gt && (clearInterval(c), a.stop(i), n(new Error("Subscription resolution timeout")));
                }, this.pollingInterval);
            }).catch(()=>!1);
        }, this.on = (s, i)=>{
            this.events.on(s, i);
        }, this.once = (s, i)=>{
            this.events.once(s, i);
        }, this.off = (s, i)=>{
            this.events.off(s, i);
        }, this.removeListener = (s, i)=>{
            this.events.removeListener(s, i);
        }, this.start = async ()=>{
            await this.onConnect();
        }, this.stop = async ()=>{
            await this.onDisconnect();
        }, this.restart = async ()=>{
            await this.restore(), await this.onRestart();
        }, this.checkPending = async ()=>{
            if (this.pending.size === 0 && (!this.initialized || !this.relayer.connected)) return;
            const s = [];
            this.pending.forEach((i)=>{
                s.push(i);
            }), await this.batchSubscribe(s);
        }, this.registerEventListeners = ()=>{
            this.relayer.core.heartbeat.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$heartbeat$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HEARTBEAT_EVENTS"].pulse, async ()=>{
                await this.checkPending();
            }), this.events.on(T.created, async (s)=>{
                const i = T.created;
                this.logger.info(`Emitting ${i}`), this.logger.debug({
                    type: "event",
                    event: i,
                    data: s
                }), await this.persist();
            }), this.events.on(T.deleted, async (s)=>{
                const i = T.deleted;
                this.logger.info(`Emitting ${i}`), this.logger.debug({
                    type: "event",
                    event: i,
                    data: s
                }), await this.persist();
            });
        }, this.relayer = e, this.logger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateChildLogger"])(t, this.name), this.clientId = "";
    }
    get context() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getLoggerContext"])(this.logger);
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.relayer.core.customStoragePrefix + "//" + this.name;
    }
    get length() {
        return this.subscriptions.size;
    }
    get ids() {
        return Array.from(this.subscriptions.keys());
    }
    get values() {
        return Array.from(this.subscriptions.values());
    }
    get topics() {
        return this.topicMap.topics;
    }
    hasSubscription(e, t) {
        let s = !1;
        try {
            s = this.getSubscription(e).topic === t;
        } catch  {}
        return s;
    }
    reset() {
        this.cached = [], this.initialized = !0;
    }
    onDisable() {
        this.cached = this.values, this.subscriptions.clear(), this.topicMap.clear();
    }
    async unsubscribeByTopic(e, t) {
        const s = this.topicMap.get(e);
        await Promise.all(s.map(async (i)=>await this.unsubscribeById(e, i, t)));
    }
    async unsubscribeById(e, t, s) {
        this.logger.debug("Unsubscribing Topic"), this.logger.trace({
            type: "method",
            method: "unsubscribe",
            params: {
                topic: e,
                id: t,
                opts: s
            }
        });
        try {
            const i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRelayProtocolName"])(s);
            await this.rpcUnsubscribe(e, t, i);
            const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSdkError"])("USER_DISCONNECTED", `${this.name}, ${e}`);
            await this.onUnsubscribe(e, t, r), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({
                type: "method",
                method: "unsubscribe",
                params: {
                    topic: e,
                    id: t,
                    opts: s
                }
            });
        } catch (i) {
            throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(i), i;
        }
    }
    async rpcSubscribe(e, t, s) {
        var i;
        s?.transportType === M.relay && await this.restartToComplete();
        const r = {
            method: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRelayProtocolApi"])(t.protocol).subscribe,
            params: {
                topic: e
            }
        };
        this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
            type: "payload",
            direction: "outgoing",
            request: r
        });
        const n = (i = s?.internal) == null ? void 0 : i.throwOnFailedPublish;
        try {
            const a = this.getSubscriptionId(e);
            if (s?.transportType === M.link_mode) return setTimeout(()=>{
                (this.relayer.connected || this.relayer.connecting) && this.relayer.request(r).catch((u)=>this.logger.warn(u));
            }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toMiliseconds"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ONE_SECOND"])), a;
            const c = new Promise(async (u)=>{
                const d = (y)=>{
                    y.topic === e && (this.events.removeListener(T.created, d), u(y.id));
                };
                this.events.on(T.created, d);
                try {
                    const y = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createExpiringPromise"])(new Promise((m, l)=>{
                        this.relayer.request(r).catch((g)=>{
                            this.logger.warn(g, g?.message), l(g);
                        }).then(m);
                    }), this.initialSubscribeTimeout, `Subscribing to ${e} failed, please try again`);
                    this.events.removeListener(T.created, d), u(y);
                } catch  {}
            }), h = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createExpiringPromise"])(c, this.subscribeTimeout, `Subscribing to ${e} failed, please try again`);
            if (!h && n) throw new Error(`Subscribing to ${e} failed, please try again`);
            return h ? a : null;
        } catch (a) {
            if (this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(v.connection_stalled), n) throw a;
        }
        return null;
    }
    async rpcBatchSubscribe(e) {
        if (!e.length) return;
        const t = e[0].relay, s = {
            method: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRelayProtocolApi"])(t.protocol).batchSubscribe,
            params: {
                topics: e.map((i)=>i.topic)
            }
        };
        this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
            type: "payload",
            direction: "outgoing",
            request: s
        });
        try {
            await await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createExpiringPromise"])(new Promise((i)=>{
                this.relayer.request(s).catch((r)=>this.logger.warn(r)).then(i);
            }), this.subscribeTimeout, "rpcBatchSubscribe failed, please try again");
        } catch  {
            this.relayer.events.emit(v.connection_stalled);
        }
    }
    async rpcBatchFetchMessages(e) {
        if (!e.length) return;
        const t = e[0].relay, s = {
            method: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRelayProtocolApi"])(t.protocol).batchFetchMessages,
            params: {
                topics: e.map((r)=>r.topic)
            }
        };
        this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
            type: "payload",
            direction: "outgoing",
            request: s
        });
        let i;
        try {
            i = await await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createExpiringPromise"])(new Promise((r, n)=>{
                this.relayer.request(s).catch((a)=>{
                    this.logger.warn(a), n(a);
                }).then(r);
            }), this.subscribeTimeout, "rpcBatchFetchMessages failed, please try again");
        } catch  {
            this.relayer.events.emit(v.connection_stalled);
        }
        return i;
    }
    rpcUnsubscribe(e, t, s) {
        const i = {
            method: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRelayProtocolApi"])(s.protocol).unsubscribe,
            params: {
                topic: e,
                id: t
            }
        };
        return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
            type: "payload",
            direction: "outgoing",
            request: i
        }), this.relayer.request(i);
    }
    onSubscribe(e, t) {
        this.setSubscription(e, Ie(Z({}, t), {
            id: e
        })), this.pending.delete(t.topic);
    }
    onBatchSubscribe(e) {
        e.length && e.forEach((t)=>{
            this.setSubscription(t.id, Z({}, t)), this.pending.delete(t.topic);
        });
    }
    async onUnsubscribe(e, t, s) {
        this.events.removeAllListeners(t), this.hasSubscription(t, e) && this.deleteSubscription(t, s), await this.relayer.messages.del(e);
    }
    async setRelayerSubscriptions(e) {
        await this.relayer.core.storage.setItem(this.storageKey, e);
    }
    async getRelayerSubscriptions() {
        return await this.relayer.core.storage.getItem(this.storageKey);
    }
    setSubscription(e, t) {
        this.logger.debug("Setting subscription"), this.logger.trace({
            type: "method",
            method: "setSubscription",
            id: e,
            subscription: t
        }), this.addSubscription(e, t);
    }
    addSubscription(e, t) {
        this.subscriptions.set(e, Z({}, t)), this.topicMap.set(t.topic, e), this.events.emit(T.created, t);
    }
    getSubscription(e) {
        this.logger.debug("Getting subscription"), this.logger.trace({
            type: "method",
            method: "getSubscription",
            id: e
        });
        const t = this.subscriptions.get(e);
        if (!t) {
            const { message: s } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw new Error(s);
        }
        return t;
    }
    deleteSubscription(e, t) {
        this.logger.debug("Deleting subscription"), this.logger.trace({
            type: "method",
            method: "deleteSubscription",
            id: e,
            reason: t
        });
        const s = this.getSubscription(e);
        this.subscriptions.delete(e), this.topicMap.delete(s.topic, e), this.events.emit(T.deleted, Ie(Z({}, s), {
            reason: t
        }));
    }
    async persist() {
        await this.setRelayerSubscriptions(this.values), this.events.emit(T.sync);
    }
    async onRestart() {
        if (this.cached.length) {
            const e = [
                ...this.cached
            ], t = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
            for(let s = 0; s < t; s++){
                const i = e.splice(0, this.batchSubscribeTopicsLimit);
                await this.batchSubscribe(i);
            }
        }
        this.events.emit(T.resubscribed);
    }
    async restore() {
        try {
            const e = await this.getRelayerSubscriptions();
            if (typeof e > "u" || !e.length) return;
            if (this.subscriptions.size) {
                const { message: t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(t), this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`), new Error(t);
            }
            this.cached = e, this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({
                type: "method",
                method: "restore",
                subscriptions: this.values
            });
        } catch (e) {
            this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(e);
        }
    }
    async batchSubscribe(e) {
        e.length && (await this.rpcBatchSubscribe(e), this.onBatchSubscribe(e.map((t)=>Ie(Z({}, t), {
                id: this.getSubscriptionId(t.topic)
            }))));
    }
    async batchFetchMessages(e) {
        if (!e.length) return;
        this.logger.trace(`Fetching batch messages for ${e.length} subscriptions`);
        const t = await this.rpcBatchFetchMessages(e);
        t && t.messages && (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sleep"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toMiliseconds"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ONE_SECOND"])), await this.relayer.handleBatchMessageEvents(t.messages));
    }
    async onConnect() {
        await this.restart(), this.reset();
    }
    onDisconnect() {
        this.onDisable();
    }
    isInitialized() {
        if (!this.initialized) {
            const { message: e } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("NOT_INITIALIZED", this.name);
            throw new Error(e);
        }
    }
    async restartToComplete() {
        !this.relayer.connected && !this.relayer.connecting && await this.relayer.transportOpen();
    }
    getSubscriptionId(e) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hashMessage"])(e + this.clientId);
    }
}
var mn = Object.defineProperty, si = Object.getOwnPropertySymbols, bn = Object.prototype.hasOwnProperty, fn = Object.prototype.propertyIsEnumerable, ri = (o, e, t)=>e in o ? mn(o, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : o[e] = t, ni = (o, e)=>{
    for(var t in e || (e = {}))bn.call(e, t) && ri(o, t, e[t]);
    if (si) for (var t of si(e))fn.call(e, t) && ri(o, t, e[t]);
    return o;
};
class oi extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$types$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IRelayer"] {
    constructor(e){
        super(e), this.protocol = "wc", this.version = 2, this.events = new __TURBOPACK__imported__module__$5b$externals$5d2f$events__$5b$external$5d$__$28$events$2c$__cjs$29$__["EventEmitter"], this.name = at, this.transportExplicitlyClosed = !1, this.initialized = !1, this.connectionAttemptInProgress = !1, this.hasExperiencedNetworkDisruption = !1, this.heartBeatTimeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toMiliseconds"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["THIRTY_SECONDS"] + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FIVE_SECONDS"]), this.requestsInFlight = [], this.connectTimeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toMiliseconds"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ONE_SECOND"] * 15), this.request = async (t)=>{
            var s, i;
            this.logger.debug("Publishing Request Payload");
            const r = t.id || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBigIntRpcId"])().toString();
            await this.toEstablishConnection();
            try {
                this.logger.trace({
                    id: r,
                    method: t.method,
                    topic: (s = t.params) == null ? void 0 : s.topic
                }, "relayer.request - publishing...");
                const n = `${r}:${((i = t.params) == null ? void 0 : i.tag) || ""}`;
                this.requestsInFlight.push(n);
                const a = await this.provider.request(t);
                return this.requestsInFlight = this.requestsInFlight.filter((c)=>c !== n), a;
            } catch (n) {
                throw this.logger.debug(`Failed to Publish Request: ${r}`), n;
            }
        }, this.resetPingTimeout = ()=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNode"])()) try {
                clearTimeout(this.pingTimeout), this.pingTimeout = setTimeout(()=>{
                    var t, s, i;
                    this.logger.debug({}, "pingTimeout: Connection stalled, terminating..."), (i = (s = (t = this.provider) == null ? void 0 : t.connection) == null ? void 0 : s.socket) == null || i.terminate();
                }, this.heartBeatTimeout);
            } catch (t) {
                this.logger.warn(t, t?.message);
            }
        }, this.onPayloadHandler = (t)=>{
            this.onProviderPayload(t), this.resetPingTimeout();
        }, this.onConnectHandler = ()=>{
            this.logger.warn({}, "Relayer connected \u{1F6DC}"), this.startPingTimeout(), this.events.emit(v.connect);
        }, this.onDisconnectHandler = ()=>{
            this.logger.warn({}, "Relayer disconnected \u{1F6D1}"), this.requestsInFlight = [], this.onProviderDisconnect();
        }, this.onProviderErrorHandler = (t)=>{
            this.logger.fatal(t, `Fatal socket error: ${t?.message}`), this.events.emit(v.error, t), this.logger.fatal("Fatal socket error received, closing transport"), this.transportClose();
        }, this.registerProviderListeners = ()=>{
            this.provider.on(C.payload, this.onPayloadHandler), this.provider.on(C.connect, this.onConnectHandler), this.provider.on(C.disconnect, this.onDisconnectHandler), this.provider.on(C.error, this.onProviderErrorHandler);
        }, this.core = e.core, this.logger = typeof e.logger < "u" && typeof e.logger != "string" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateChildLogger"])(e.logger, this.name) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pino$2f$pino$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__pino$3e$__["pino"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getDefaultLoggerOptions"])({
            level: e.logger || ot
        })), this.messages = new Jt(this.logger, e.core), this.subscriber = new ii(this, this.logger), this.publisher = new ln(this, this.logger), this.relayUrl = e?.relayUrl || fe, this.projectId = e.projectId, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAndroid"])() ? this.packageName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAppId"])() : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isIos"])() && (this.bundleId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAppId"])()), this.provider = {};
    }
    async init() {
        if (this.logger.trace("Initialized"), this.registerEventListeners(), await Promise.all([
            this.messages.init(),
            this.subscriber.init()
        ]), this.initialized = !0, this.subscriber.cached.length > 0) try {
            await this.transportOpen();
        } catch (e) {
            this.logger.warn(e, e?.message);
        }
    }
    get context() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getLoggerContext"])(this.logger);
    }
    get connected() {
        var e, t, s;
        return ((s = (t = (e = this.provider) == null ? void 0 : e.connection) == null ? void 0 : t.socket) == null ? void 0 : s.readyState) === 1;
    }
    get connecting() {
        var e, t, s;
        return ((s = (t = (e = this.provider) == null ? void 0 : e.connection) == null ? void 0 : t.socket) == null ? void 0 : s.readyState) === 0;
    }
    async publish(e, t, s) {
        this.isInitialized(), await this.publisher.publish(e, t, s), await this.recordMessageEvent({
            topic: e,
            message: t,
            publishedAt: Date.now(),
            transportType: M.relay
        });
    }
    async subscribe(e, t) {
        var s, i, r;
        this.isInitialized(), (!(t != null && t.transportType) || t?.transportType === "relay") && await this.toEstablishConnection();
        const n = typeof ((s = t?.internal) == null ? void 0 : s.throwOnFailedPublish) > "u" ? !0 : (i = t?.internal) == null ? void 0 : i.throwOnFailedPublish;
        let a = ((r = this.subscriber.topicMap.get(e)) == null ? void 0 : r[0]) || "", c;
        const h = (u)=>{
            u.topic === e && (this.subscriber.off(T.created, h), c());
        };
        return await Promise.all([
            new Promise((u)=>{
                c = u, this.subscriber.on(T.created, h);
            }),
            new Promise(async (u, d)=>{
                a = await this.subscriber.subscribe(e, ni({
                    internal: {
                        throwOnFailedPublish: n
                    }
                }, t)).catch((y)=>{
                    n && d(y);
                }) || a, u();
            })
        ]), a;
    }
    async unsubscribe(e, t) {
        this.isInitialized(), await this.subscriber.unsubscribe(e, t);
    }
    on(e, t) {
        this.events.on(e, t);
    }
    once(e, t) {
        this.events.once(e, t);
    }
    off(e, t) {
        this.events.off(e, t);
    }
    removeListener(e, t) {
        this.events.removeListener(e, t);
    }
    async transportDisconnect() {
        this.provider.disconnect && (this.hasExperiencedNetworkDisruption || this.connected) ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createExpiringPromise"])(this.provider.disconnect(), 2e3, "provider.disconnect()").catch(()=>this.onProviderDisconnect()) : this.onProviderDisconnect();
    }
    async transportClose() {
        this.transportExplicitlyClosed = !0, await this.transportDisconnect();
    }
    async transportOpen(e) {
        if (this.connectPromise ? (this.logger.debug({}, "Waiting for existing connection attempt to resolve..."), await this.connectPromise, this.logger.debug({}, "Existing connection attempt resolved")) : (this.connectPromise = new Promise(async (t, s)=>{
            await this.connect(e).then(t).catch(s).finally(()=>{
                this.connectPromise = void 0;
            });
        }), await this.connectPromise), !this.connected) throw new Error(`Couldn't establish socket connection to the relay server: ${this.relayUrl}`);
    }
    async restartTransport(e) {
        this.logger.debug({}, "Restarting transport..."), !this.connectionAttemptInProgress && (this.relayUrl = e || this.relayUrl, await this.confirmOnlineStateOrThrow(), await this.transportClose(), await this.transportOpen());
    }
    async confirmOnlineStateOrThrow() {
        if (!await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isOnline"])()) throw new Error("No internet connection detected. Please restart your network and try again.");
    }
    async handleBatchMessageEvents(e) {
        if (e?.length === 0) {
            this.logger.trace("Batch message events is empty. Ignoring...");
            return;
        }
        const t = e.sort((s, i)=>s.publishedAt - i.publishedAt);
        this.logger.debug(`Batch of ${t.length} message events sorted`);
        for (const s of t)try {
            await this.onMessageEvent(s);
        } catch (i) {
            this.logger.warn(i, "Error while processing batch message event: " + i?.message);
        }
        this.logger.trace(`Batch of ${t.length} message events processed`);
    }
    async onLinkMessageEvent(e, t) {
        const { topic: s } = e;
        if (!t.sessionExists) {
            const i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calcExpiry"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FIVE_MINUTES"]), r = {
                topic: s,
                expiry: i,
                relay: {
                    protocol: "irn"
                },
                active: !1
            };
            await this.core.pairing.pairings.set(s, r);
        }
        this.events.emit(v.message, e), await this.recordMessageEvent(e);
    }
    async connect(e) {
        await this.confirmOnlineStateOrThrow(), e && e !== this.relayUrl && (this.relayUrl = e, await this.transportDisconnect()), this.connectionAttemptInProgress = !0, this.transportExplicitlyClosed = !1;
        let t = 1;
        for(; t < 6;){
            try {
                this.logger.debug({}, `Connecting to ${this.relayUrl}, attempt: ${t}...`), await this.createProvider(), await new Promise(async (s, i)=>{
                    const r = ()=>{
                        i(new Error("Connection interrupted while trying to subscribe"));
                    };
                    this.provider.once(C.disconnect, r), await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createExpiringPromise"])(new Promise((n, a)=>{
                        this.provider.connect().then(n).catch(a);
                    }), this.connectTimeout, `Socket stalled when trying to connect to ${this.relayUrl}`).catch((n)=>{
                        i(n);
                    }).finally(()=>{
                        this.provider.off(C.disconnect, r), clearTimeout(this.reconnectTimeout), this.reconnectTimeout = void 0;
                    }), await new Promise(async (n, a)=>{
                        const c = ()=>{
                            a(new Error("Connection interrupted while trying to subscribe"));
                        };
                        this.provider.once(C.disconnect, c), await this.subscriber.start().then(n).catch(a).finally(()=>{
                            this.provider.off(C.disconnect, c);
                        });
                    }), this.hasExperiencedNetworkDisruption = !1, s();
                });
            } catch (s) {
                await this.subscriber.stop();
                const i = s;
                this.logger.warn({}, i.message), this.hasExperiencedNetworkDisruption = !0;
            } finally{
                this.connectionAttemptInProgress = !1;
            }
            if (this.connected) {
                this.logger.debug({}, `Connected to ${this.relayUrl} successfully on attempt: ${t}`);
                break;
            }
            await new Promise((s)=>setTimeout(s, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toMiliseconds"])(t * 1))), t++;
        }
    }
    startPingTimeout() {
        var e, t, s, i, r;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNode"])()) try {
            (t = (e = this.provider) == null ? void 0 : e.connection) != null && t.socket && ((r = (i = (s = this.provider) == null ? void 0 : s.connection) == null ? void 0 : i.socket) == null || r.on("ping", ()=>{
                this.resetPingTimeout();
            })), this.resetPingTimeout();
        } catch (n) {
            this.logger.warn(n, n?.message);
        }
    }
    async createProvider() {
        this.provider.connection && this.unregisterProviderListeners();
        const e = await this.core.crypto.signJWT(this.relayUrl);
        this.provider = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$provider$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JsonRpcProvider"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$ws$2d$connection$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRelayRpcUrl"])({
            sdkVersion: re,
            protocol: this.protocol,
            version: this.version,
            relayUrl: this.relayUrl,
            projectId: this.projectId,
            auth: e,
            useOnCloseEvent: !0,
            bundleId: this.bundleId,
            packageName: this.packageName
        }))), this.registerProviderListeners();
    }
    async recordMessageEvent(e) {
        const { topic: t, message: s } = e;
        await this.messages.set(t, s);
    }
    async shouldIgnoreMessageEvent(e) {
        const { topic: t, message: s } = e;
        if (!s || s.length === 0) return this.logger.warn(`Ignoring invalid/empty message: ${s}`), !0;
        if (!await this.subscriber.isSubscribed(t)) return this.logger.warn(`Ignoring message for non-subscribed topic ${t}`), !0;
        const i = this.messages.has(t, s);
        return i && this.logger.warn(`Ignoring duplicate message: ${s}`), i;
    }
    async onProviderPayload(e) {
        if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({
            type: "payload",
            direction: "incoming",
            payload: e
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isJsonRpcRequest"])(e)) {
            if (!e.method.endsWith(ct)) return;
            const t = e.params, { topic: s, message: i, publishedAt: r, attestation: n } = t.data, a = {
                topic: s,
                message: i,
                publishedAt: r,
                transportType: M.relay,
                attestation: n
            };
            this.logger.debug("Emitting Relayer Payload"), this.logger.trace(ni({
                type: "event",
                event: t.id
            }, a)), this.events.emit(t.id, a), await this.acknowledgePayload(e), await this.onMessageEvent(a);
        } else (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isJsonRpcResponse"])(e) && this.events.emit(v.message_ack, e);
    }
    async onMessageEvent(e) {
        await this.shouldIgnoreMessageEvent(e) || (this.events.emit(v.message, e), await this.recordMessageEvent(e));
    }
    async acknowledgePayload(e) {
        const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatJsonRpcResult"])(e.id, !0);
        await this.provider.connection.send(t);
    }
    unregisterProviderListeners() {
        this.provider.off(C.payload, this.onPayloadHandler), this.provider.off(C.connect, this.onConnectHandler), this.provider.off(C.disconnect, this.onDisconnectHandler), this.provider.off(C.error, this.onProviderErrorHandler), clearTimeout(this.pingTimeout);
    }
    async registerEventListeners() {
        let e = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isOnline"])();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["subscribeToNetworkChange"])(async (t)=>{
            e !== t && (e = t, t ? await this.transportOpen().catch((s)=>this.logger.error(s, s?.message)) : (this.hasExperiencedNetworkDisruption = !0, await this.transportDisconnect(), this.transportExplicitlyClosed = !1));
        });
    }
    async onProviderDisconnect() {
        await this.subscriber.stop(), clearTimeout(this.pingTimeout), this.events.emit(v.disconnect), this.connectionAttemptInProgress = !1, !this.transportExplicitlyClosed && (this.reconnectTimeout || this.connectPromise || (this.reconnectTimeout = setTimeout(async ()=>{
            clearTimeout(this.reconnectTimeout), await this.transportOpen().catch((e)=>this.logger.error(e, e?.message));
        }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toMiliseconds"])(ht))));
    }
    isInitialized() {
        if (!this.initialized) {
            const { message: e } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("NOT_INITIALIZED", this.name);
            throw new Error(e);
        }
    }
    async toEstablishConnection() {
        await this.confirmOnlineStateOrThrow(), !this.connected && await this.transportOpen();
    }
}
var vn = Object.defineProperty, ai = Object.getOwnPropertySymbols, _n = Object.prototype.hasOwnProperty, En = Object.prototype.propertyIsEnumerable, ci = (o, e, t)=>e in o ? vn(o, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : o[e] = t, hi = (o, e)=>{
    for(var t in e || (e = {}))_n.call(e, t) && ci(o, t, e[t]);
    if (ai) for (var t of ai(e))En.call(e, t) && ci(o, t, e[t]);
    return o;
};
class li extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$types$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IStore"] {
    constructor(e, t, s, i = A, r = void 0){
        super(e, t, s, i), this.core = e, this.logger = t, this.name = s, this.map = new Map, this.version = lt, this.cached = [], this.initialized = !1, this.storagePrefix = A, this.recentlyDeleted = [], this.recentlyDeletedLimit = 200, this.init = async ()=>{
            this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((n)=>{
                this.getKey && n !== null && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isUndefined"])(n) ? this.map.set(this.getKey(n), n) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isProposalStruct"])(n) ? this.map.set(n.id, n) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSessionStruct"])(n) && this.map.set(n.topic, n);
            }), this.cached = [], this.initialized = !0);
        }, this.set = async (n, a)=>{
            this.isInitialized(), this.map.has(n) ? await this.update(n, a) : (this.logger.debug("Setting value"), this.logger.trace({
                type: "method",
                method: "set",
                key: n,
                value: a
            }), this.map.set(n, a), await this.persist());
        }, this.get = (n)=>(this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({
                type: "method",
                method: "get",
                key: n
            }), this.getData(n)), this.getAll = (n)=>(this.isInitialized(), n ? this.values.filter((a)=>Object.keys(n).every((c)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2e$isequal$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(a[c], n[c]))) : this.values), this.update = async (n, a)=>{
            this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({
                type: "method",
                method: "update",
                key: n,
                update: a
            });
            const c = hi(hi({}, this.getData(n)), a);
            this.map.set(n, c), await this.persist();
        }, this.delete = async (n, a)=>{
            this.isInitialized(), this.map.has(n) && (this.logger.debug("Deleting value"), this.logger.trace({
                type: "method",
                method: "delete",
                key: n,
                reason: a
            }), this.map.delete(n), this.addToRecentlyDeleted(n), await this.persist());
        }, this.logger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateChildLogger"])(t, this.name), this.storagePrefix = i, this.getKey = r;
    }
    get context() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getLoggerContext"])(this.logger);
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
    }
    get length() {
        return this.map.size;
    }
    get keys() {
        return Array.from(this.map.keys());
    }
    get values() {
        return Array.from(this.map.values());
    }
    addToRecentlyDeleted(e) {
        this.recentlyDeleted.push(e), this.recentlyDeleted.length >= this.recentlyDeletedLimit && this.recentlyDeleted.splice(0, this.recentlyDeletedLimit / 2);
    }
    async setDataStore(e) {
        await this.core.storage.setItem(this.storageKey, e);
    }
    async getDataStore() {
        return await this.core.storage.getItem(this.storageKey);
    }
    getData(e) {
        const t = this.map.get(e);
        if (!t) {
            if (this.recentlyDeleted.includes(e)) {
                const { message: i } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `Record was recently deleted - ${this.name}: ${e}`);
                throw this.logger.error(i), new Error(i);
            }
            const { message: s } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw this.logger.error(s), new Error(s);
        }
        return t;
    }
    async persist() {
        await this.setDataStore(this.values);
    }
    async restore() {
        try {
            const e = await this.getDataStore();
            if (typeof e > "u" || !e.length) return;
            if (this.map.size) {
                const { message: t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(t), new Error(t);
            }
            this.cached = e, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({
                type: "method",
                method: "restore",
                value: this.values
            });
        } catch (e) {
            this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(e);
        }
    }
    isInitialized() {
        if (!this.initialized) {
            const { message: e } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("NOT_INITIALIZED", this.name);
            throw new Error(e);
        }
    }
}
class ui {
    constructor(e, t){
        this.core = e, this.logger = t, this.name = yt, this.version = Dt, this.events = new __TURBOPACK__imported__module__$5b$externals$5d2f$events__$5b$external$5d$__$28$events$2c$__cjs$29$__["default"], this.initialized = !1, this.storagePrefix = A, this.ignoredPayloadTypes = [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TYPE_1"]
        ], this.registeredMethods = [], this.init = async ()=>{
            this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"));
        }, this.register = ({ methods: s })=>{
            this.isInitialized(), this.registeredMethods = [
                ...new Set([
                    ...this.registeredMethods,
                    ...s
                ])
            ];
        }, this.create = async (s)=>{
            this.isInitialized();
            const i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateRandomBytes32"])(), r = await this.core.crypto.setSymKey(i), n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calcExpiry"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FIVE_MINUTES"]), a = {
                protocol: nt
            }, c = {
                topic: r,
                expiry: n,
                relay: a,
                active: !1,
                methods: s?.methods
            }, h = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatUri"])({
                protocol: this.core.protocol,
                version: this.core.version,
                topic: r,
                symKey: i,
                relay: a,
                expiryTimestamp: n,
                methods: s?.methods
            });
            return this.events.emit(j.create, c), this.core.expirer.set(r, n), await this.pairings.set(r, c), await this.core.relayer.subscribe(r, {
                transportType: s?.transportType
            }), {
                topic: r,
                uri: h
            };
        }, this.pair = async (s)=>{
            this.isInitialized();
            const i = this.core.eventClient.createEvent({
                properties: {
                    topic: s?.uri,
                    trace: [
                        z.pairing_started
                    ]
                }
            });
            this.isValidPair(s, i);
            const { topic: r, symKey: n, relay: a, expiryTimestamp: c, methods: h } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseUri"])(s.uri);
            i.props.properties.topic = r, i.addTrace(z.pairing_uri_validation_success), i.addTrace(z.pairing_uri_not_expired);
            let u;
            if (this.pairings.keys.includes(r)) {
                if (u = this.pairings.get(r), i.addTrace(z.existing_pairing), u.active) throw i.setError($.active_pairing_already_exists), new Error(`Pairing already exists: ${r}. Please try again with a new connection URI.`);
                i.addTrace(z.pairing_not_expired);
            }
            const d = c || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calcExpiry"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FIVE_MINUTES"]), y = {
                topic: r,
                relay: a,
                expiry: d,
                active: !1,
                methods: h
            };
            this.core.expirer.set(r, d), await this.pairings.set(r, y), i.addTrace(z.store_new_pairing), s.activatePairing && await this.activate({
                topic: r
            }), this.events.emit(j.create, y), i.addTrace(z.emit_inactive_pairing), this.core.crypto.keychain.has(r) || await this.core.crypto.setSymKey(n, r), i.addTrace(z.subscribing_pairing_topic);
            try {
                await this.core.relayer.confirmOnlineStateOrThrow();
            } catch  {
                i.setError($.no_internet_connection);
            }
            try {
                await this.core.relayer.subscribe(r, {
                    relay: a
                });
            } catch (m) {
                throw i.setError($.subscribe_pairing_topic_failure), m;
            }
            return i.addTrace(z.subscribe_pairing_topic_success), y;
        }, this.activate = async ({ topic: s })=>{
            this.isInitialized();
            const i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calcExpiry"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FIVE_MINUTES"]);
            this.core.expirer.set(s, i), await this.pairings.update(s, {
                active: !0,
                expiry: i
            });
        }, this.ping = async (s)=>{
            this.isInitialized(), await this.isValidPing(s), this.logger.warn("ping() is deprecated and will be removed in the next major release.");
            const { topic: i } = s;
            if (this.pairings.keys.includes(i)) {
                const r = await this.sendRequest(i, "wc_pairingPing", {}), { done: n, resolve: a, reject: c } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDelayedPromise"])();
                this.events.once((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["engineEvent"])("pairing_ping", r), ({ error: h })=>{
                    h ? c(h) : a();
                }), await n();
            }
        }, this.updateExpiry = async ({ topic: s, expiry: i })=>{
            this.isInitialized(), await this.pairings.update(s, {
                expiry: i
            });
        }, this.updateMetadata = async ({ topic: s, metadata: i })=>{
            this.isInitialized(), await this.pairings.update(s, {
                peerMetadata: i
            });
        }, this.getPairings = ()=>(this.isInitialized(), this.pairings.values), this.disconnect = async (s)=>{
            this.isInitialized(), await this.isValidDisconnect(s);
            const { topic: i } = s;
            this.pairings.keys.includes(i) && (await this.sendRequest(i, "wc_pairingDelete", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSdkError"])("USER_DISCONNECTED")), await this.deletePairing(i));
        }, this.formatUriFromPairing = (s)=>{
            this.isInitialized();
            const { topic: i, relay: r, expiry: n, methods: a } = s, c = this.core.crypto.keychain.get(i);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatUri"])({
                protocol: this.core.protocol,
                version: this.core.version,
                topic: i,
                symKey: c,
                relay: r,
                expiryTimestamp: n,
                methods: a
            });
        }, this.sendRequest = async (s, i, r)=>{
            const n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatJsonRpcRequest"])(i, r), a = await this.core.crypto.encode(s, n), c = V[i].req;
            return this.core.history.set(s, n), this.core.relayer.publish(s, a, c), n.id;
        }, this.sendResult = async (s, i, r)=>{
            const n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatJsonRpcResult"])(s, r), a = await this.core.crypto.encode(i, n), c = await this.core.history.get(i, s), h = V[c.request.method].res;
            await this.core.relayer.publish(i, a, h), await this.core.history.resolve(n);
        }, this.sendError = async (s, i, r)=>{
            const n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatJsonRpcError"])(s, r), a = await this.core.crypto.encode(i, n), c = await this.core.history.get(i, s), h = V[c.request.method] ? V[c.request.method].res : V.unregistered_method.res;
            await this.core.relayer.publish(i, a, h), await this.core.history.resolve(n);
        }, this.deletePairing = async (s, i)=>{
            await this.core.relayer.unsubscribe(s), await Promise.all([
                this.pairings.delete(s, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSdkError"])("USER_DISCONNECTED")),
                this.core.crypto.deleteSymKey(s),
                i ? Promise.resolve() : this.core.expirer.del(s)
            ]);
        }, this.cleanup = async ()=>{
            const s = this.pairings.getAll().filter((i)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isExpired"])(i.expiry));
            await Promise.all(s.map((i)=>this.deletePairing(i.topic)));
        }, this.onRelayEventRequest = (s)=>{
            const { topic: i, payload: r } = s;
            switch(r.method){
                case "wc_pairingPing":
                    return this.onPairingPingRequest(i, r);
                case "wc_pairingDelete":
                    return this.onPairingDeleteRequest(i, r);
                default:
                    return this.onUnknownRpcMethodRequest(i, r);
            }
        }, this.onRelayEventResponse = async (s)=>{
            const { topic: i, payload: r } = s, n = (await this.core.history.get(i, r.id)).request.method;
            switch(n){
                case "wc_pairingPing":
                    return this.onPairingPingResponse(i, r);
                default:
                    return this.onUnknownRpcMethodResponse(n);
            }
        }, this.onPairingPingRequest = async (s, i)=>{
            const { id: r } = i;
            try {
                this.isValidPing({
                    topic: s
                }), await this.sendResult(r, s, !0), this.events.emit(j.ping, {
                    id: r,
                    topic: s
                });
            } catch (n) {
                await this.sendError(r, s, n), this.logger.error(n);
            }
        }, this.onPairingPingResponse = (s, i)=>{
            const { id: r } = i;
            setTimeout(()=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isJsonRpcResult"])(i) ? this.events.emit((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["engineEvent"])("pairing_ping", r), {}) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isJsonRpcError"])(i) && this.events.emit((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["engineEvent"])("pairing_ping", r), {
                    error: i.error
                });
            }, 500);
        }, this.onPairingDeleteRequest = async (s, i)=>{
            const { id: r } = i;
            try {
                this.isValidDisconnect({
                    topic: s
                }), await this.deletePairing(s), this.events.emit(j.delete, {
                    id: r,
                    topic: s
                });
            } catch (n) {
                await this.sendError(r, s, n), this.logger.error(n);
            }
        }, this.onUnknownRpcMethodRequest = async (s, i)=>{
            const { id: r, method: n } = i;
            try {
                if (this.registeredMethods.includes(n)) return;
                const a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSdkError"])("WC_METHOD_UNSUPPORTED", n);
                await this.sendError(r, s, a), this.logger.error(a);
            } catch (a) {
                await this.sendError(r, s, a), this.logger.error(a);
            }
        }, this.onUnknownRpcMethodResponse = (s)=>{
            this.registeredMethods.includes(s) || this.logger.error((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSdkError"])("WC_METHOD_UNSUPPORTED", s));
        }, this.isValidPair = (s, i)=>{
            var r;
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidParams"])(s)) {
                const { message: a } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `pair() params: ${s}`);
                throw i.setError($.malformed_pairing_uri), new Error(a);
            }
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidUrl"])(s.uri)) {
                const { message: a } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `pair() uri: ${s.uri}`);
                throw i.setError($.malformed_pairing_uri), new Error(a);
            }
            const n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseUri"])(s?.uri);
            if (!((r = n?.relay) != null && r.protocol)) {
                const { message: a } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", "pair() uri#relay-protocol");
                throw i.setError($.malformed_pairing_uri), new Error(a);
            }
            if (!(n != null && n.symKey)) {
                const { message: a } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", "pair() uri#symKey");
                throw i.setError($.malformed_pairing_uri), new Error(a);
            }
            if (n != null && n.expiryTimestamp && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toMiliseconds"])(n?.expiryTimestamp) < Date.now()) {
                i.setError($.pairing_expired);
                const { message: a } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("EXPIRED", "pair() URI has expired. Please try again with a new connection URI.");
                throw new Error(a);
            }
        }, this.isValidPing = async (s)=>{
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidParams"])(s)) {
                const { message: r } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `ping() params: ${s}`);
                throw new Error(r);
            }
            const { topic: i } = s;
            await this.isValidPairingTopic(i);
        }, this.isValidDisconnect = async (s)=>{
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidParams"])(s)) {
                const { message: r } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `disconnect() params: ${s}`);
                throw new Error(r);
            }
            const { topic: i } = s;
            await this.isValidPairingTopic(i);
        }, this.isValidPairingTopic = async (s)=>{
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidString"])(s, !1)) {
                const { message: i } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `pairing topic should be a string: ${s}`);
                throw new Error(i);
            }
            if (!this.pairings.keys.includes(s)) {
                const { message: i } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("NO_MATCHING_KEY", `pairing topic doesn't exist: ${s}`);
                throw new Error(i);
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isExpired"])(this.pairings.get(s).expiry)) {
                await this.deletePairing(s);
                const { message: i } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("EXPIRED", `pairing topic: ${s}`);
                throw new Error(i);
            }
        }, this.core = e, this.logger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateChildLogger"])(t, this.name), this.pairings = new li(this.core, this.logger, this.name, this.storagePrefix);
    }
    get context() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getLoggerContext"])(this.logger);
    }
    isInitialized() {
        if (!this.initialized) {
            const { message: e } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("NOT_INITIALIZED", this.name);
            throw new Error(e);
        }
    }
    registerRelayerEvents() {
        this.core.relayer.on(v.message, async (e)=>{
            const { topic: t, message: s, transportType: i } = e;
            if (!this.pairings.keys.includes(t) || i === M.link_mode || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(s))) return;
            const r = await this.core.crypto.decode(t, s);
            try {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isJsonRpcRequest"])(r) ? (this.core.history.set(t, r), this.onRelayEventRequest({
                    topic: t,
                    payload: r
                })) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isJsonRpcResponse"])(r) && (await this.core.history.resolve(r), await this.onRelayEventResponse({
                    topic: t,
                    payload: r
                }), this.core.history.delete(t, r.id));
            } catch (n) {
                this.logger.error(n);
            }
        });
    }
    registerExpirerEvents() {
        this.core.expirer.on(x.expired, async (e)=>{
            const { topic: t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseExpirerTarget"])(e.target);
            t && this.pairings.keys.includes(t) && (await this.deletePairing(t, !0), this.events.emit(j.expire, {
                topic: t
            }));
        });
    }
}
class di extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$types$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IJsonRpcHistory"] {
    constructor(e, t){
        super(e, t), this.core = e, this.logger = t, this.records = new Map, this.events = new __TURBOPACK__imported__module__$5b$externals$5d2f$events__$5b$external$5d$__$28$events$2c$__cjs$29$__["EventEmitter"], this.name = mt, this.version = bt, this.cached = [], this.initialized = !1, this.storagePrefix = A, this.init = async ()=>{
            this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((s)=>this.records.set(s.id, s)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
        }, this.set = (s, i, r)=>{
            if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({
                type: "method",
                method: "set",
                topic: s,
                request: i,
                chainId: r
            }), this.records.has(i.id)) return;
            const n = {
                id: i.id,
                topic: s,
                request: {
                    method: i.method,
                    params: i.params || null
                },
                chainId: r,
                expiry: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calcExpiry"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["THIRTY_DAYS"])
            };
            this.records.set(n.id, n), this.persist(), this.events.emit(R.created, n);
        }, this.resolve = async (s)=>{
            if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({
                type: "method",
                method: "update",
                response: s
            }), !this.records.has(s.id)) return;
            const i = await this.getRecord(s.id);
            typeof i.response > "u" && (i.response = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isJsonRpcError"])(s) ? {
                error: s.error
            } : {
                result: s.result
            }, this.records.set(i.id, i), this.persist(), this.events.emit(R.updated, i));
        }, this.get = async (s, i)=>(this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({
                type: "method",
                method: "get",
                topic: s,
                id: i
            }), await this.getRecord(i)), this.delete = (s, i)=>{
            this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({
                type: "method",
                method: "delete",
                id: i
            }), this.values.forEach((r)=>{
                if (r.topic === s) {
                    if (typeof i < "u" && r.id !== i) return;
                    this.records.delete(r.id), this.events.emit(R.deleted, r);
                }
            }), this.persist();
        }, this.exists = async (s, i)=>(this.isInitialized(), this.records.has(i) ? (await this.getRecord(i)).topic === s : !1), this.on = (s, i)=>{
            this.events.on(s, i);
        }, this.once = (s, i)=>{
            this.events.once(s, i);
        }, this.off = (s, i)=>{
            this.events.off(s, i);
        }, this.removeListener = (s, i)=>{
            this.events.removeListener(s, i);
        }, this.logger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateChildLogger"])(t, this.name);
    }
    get context() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getLoggerContext"])(this.logger);
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
    }
    get size() {
        return this.records.size;
    }
    get keys() {
        return Array.from(this.records.keys());
    }
    get values() {
        return Array.from(this.records.values());
    }
    get pending() {
        const e = [];
        return this.values.forEach((t)=>{
            if (typeof t.response < "u") return;
            const s = {
                topic: t.topic,
                request: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatJsonRpcRequest"])(t.request.method, t.request.params, t.id),
                chainId: t.chainId
            };
            return e.push(s);
        }), e;
    }
    async setJsonRpcRecords(e) {
        await this.core.storage.setItem(this.storageKey, e);
    }
    async getJsonRpcRecords() {
        return await this.core.storage.getItem(this.storageKey);
    }
    getRecord(e) {
        this.isInitialized();
        const t = this.records.get(e);
        if (!t) {
            const { message: s } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw new Error(s);
        }
        return t;
    }
    async persist() {
        await this.setJsonRpcRecords(this.values), this.events.emit(R.sync);
    }
    async restore() {
        try {
            const e = await this.getJsonRpcRecords();
            if (typeof e > "u" || !e.length) return;
            if (this.records.size) {
                const { message: t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(t), new Error(t);
            }
            this.cached = e, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({
                type: "method",
                method: "restore",
                records: this.values
            });
        } catch (e) {
            this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e);
        }
    }
    registerEventListeners() {
        this.events.on(R.created, (e)=>{
            const t = R.created;
            this.logger.info(`Emitting ${t}`), this.logger.debug({
                type: "event",
                event: t,
                record: e
            });
        }), this.events.on(R.updated, (e)=>{
            const t = R.updated;
            this.logger.info(`Emitting ${t}`), this.logger.debug({
                type: "event",
                event: t,
                record: e
            });
        }), this.events.on(R.deleted, (e)=>{
            const t = R.deleted;
            this.logger.info(`Emitting ${t}`), this.logger.debug({
                type: "event",
                event: t,
                record: e
            });
        }), this.core.heartbeat.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$heartbeat$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HEARTBEAT_EVENTS"].pulse, ()=>{
            this.cleanup();
        });
    }
    cleanup() {
        try {
            this.isInitialized();
            let e = !1;
            this.records.forEach((t)=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toMiliseconds"])(t.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${t.id}`), this.records.delete(t.id), this.events.emit(R.deleted, t, !1), e = !0);
            }), e && this.persist();
        } catch (e) {
            this.logger.warn(e);
        }
    }
    isInitialized() {
        if (!this.initialized) {
            const { message: e } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("NOT_INITIALIZED", this.name);
            throw new Error(e);
        }
    }
}
class pi extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$types$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IExpirer"] {
    constructor(e, t){
        super(e, t), this.core = e, this.logger = t, this.expirations = new Map, this.events = new __TURBOPACK__imported__module__$5b$externals$5d2f$events__$5b$external$5d$__$28$events$2c$__cjs$29$__["EventEmitter"], this.name = ft, this.version = vt, this.cached = [], this.initialized = !1, this.storagePrefix = A, this.init = async ()=>{
            this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((s)=>this.expirations.set(s.target, s)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
        }, this.has = (s)=>{
            try {
                const i = this.formatTarget(s);
                return typeof this.getExpiration(i) < "u";
            } catch  {
                return !1;
            }
        }, this.set = (s, i)=>{
            this.isInitialized();
            const r = this.formatTarget(s), n = {
                target: r,
                expiry: i
            };
            this.expirations.set(r, n), this.checkExpiry(r, n), this.events.emit(x.created, {
                target: r,
                expiration: n
            });
        }, this.get = (s)=>{
            this.isInitialized();
            const i = this.formatTarget(s);
            return this.getExpiration(i);
        }, this.del = (s)=>{
            if (this.isInitialized(), this.has(s)) {
                const i = this.formatTarget(s), r = this.getExpiration(i);
                this.expirations.delete(i), this.events.emit(x.deleted, {
                    target: i,
                    expiration: r
                });
            }
        }, this.on = (s, i)=>{
            this.events.on(s, i);
        }, this.once = (s, i)=>{
            this.events.once(s, i);
        }, this.off = (s, i)=>{
            this.events.off(s, i);
        }, this.removeListener = (s, i)=>{
            this.events.removeListener(s, i);
        }, this.logger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateChildLogger"])(t, this.name);
    }
    get context() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getLoggerContext"])(this.logger);
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
    }
    get length() {
        return this.expirations.size;
    }
    get keys() {
        return Array.from(this.expirations.keys());
    }
    get values() {
        return Array.from(this.expirations.values());
    }
    formatTarget(e) {
        if (typeof e == "string") return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatTopicTarget"])(e);
        if (typeof e == "number") return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatIdTarget"])(e);
        const { message: t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("UNKNOWN_TYPE", `Target type: ${typeof e}`);
        throw new Error(t);
    }
    async setExpirations(e) {
        await this.core.storage.setItem(this.storageKey, e);
    }
    async getExpirations() {
        return await this.core.storage.getItem(this.storageKey);
    }
    async persist() {
        await this.setExpirations(this.values), this.events.emit(x.sync);
    }
    async restore() {
        try {
            const e = await this.getExpirations();
            if (typeof e > "u" || !e.length) return;
            if (this.expirations.size) {
                const { message: t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(t), new Error(t);
            }
            this.cached = e, this.logger.debug(`Successfully Restored expirations for ${this.name}`), this.logger.trace({
                type: "method",
                method: "restore",
                expirations: this.values
            });
        } catch (e) {
            this.logger.debug(`Failed to Restore expirations for ${this.name}`), this.logger.error(e);
        }
    }
    getExpiration(e) {
        const t = this.expirations.get(e);
        if (!t) {
            const { message: s } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw this.logger.warn(s), new Error(s);
        }
        return t;
    }
    checkExpiry(e, t) {
        const { expiry: s } = t;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toMiliseconds"])(s) - Date.now() <= 0 && this.expire(e, t);
    }
    expire(e, t) {
        this.expirations.delete(e), this.events.emit(x.expired, {
            target: e,
            expiration: t
        });
    }
    checkExpirations() {
        this.core.relayer.connected && this.expirations.forEach((e, t)=>this.checkExpiry(t, e));
    }
    registerEventListeners() {
        this.core.heartbeat.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$heartbeat$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HEARTBEAT_EVENTS"].pulse, ()=>this.checkExpirations()), this.events.on(x.created, (e)=>{
            const t = x.created;
            this.logger.info(`Emitting ${t}`), this.logger.debug({
                type: "event",
                event: t,
                data: e
            }), this.persist();
        }), this.events.on(x.expired, (e)=>{
            const t = x.expired;
            this.logger.info(`Emitting ${t}`), this.logger.debug({
                type: "event",
                event: t,
                data: e
            }), this.persist();
        }), this.events.on(x.deleted, (e)=>{
            const t = x.deleted;
            this.logger.info(`Emitting ${t}`), this.logger.debug({
                type: "event",
                event: t,
                data: e
            }), this.persist();
        });
    }
    isInitialized() {
        if (!this.initialized) {
            const { message: e } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("NOT_INITIALIZED", this.name);
            throw new Error(e);
        }
    }
}
class gi extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$types$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IVerify"] {
    constructor(e, t, s){
        super(e, t, s), this.core = e, this.logger = t, this.store = s, this.name = _t, this.verifyUrlV3 = wt, this.storagePrefix = A, this.version = De, this.init = async ()=>{
            var i;
            this.isDevEnv || (this.publicKey = await this.store.getItem(this.storeKey), this.publicKey && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toMiliseconds"])((i = this.publicKey) == null ? void 0 : i.expiresAt) < Date.now() && (this.logger.debug("verify v2 public key expired"), await this.removePublicKey()));
        }, this.register = async (i)=>{
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBrowser"])() || this.isDevEnv) return;
            const r = window.location.origin, { id: n, decryptedId: a } = i, c = `${this.verifyUrlV3}/attestation?projectId=${this.core.projectId}&origin=${r}&id=${n}&decryptedId=${a}`;
            try {
                const h = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$window$2d$getters$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocument"])(), u = this.startAbortTimer(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ONE_SECOND"] * 5), d = await new Promise((y, m)=>{
                    const l = ()=>{
                        window.removeEventListener("message", w), h.body.removeChild(g), m("attestation aborted");
                    };
                    this.abortController.signal.addEventListener("abort", l);
                    const g = h.createElement("iframe");
                    g.src = c, g.style.display = "none", g.addEventListener("error", l, {
                        signal: this.abortController.signal
                    });
                    const w = (b)=>{
                        if (b.data && typeof b.data == "string") try {
                            const D = JSON.parse(b.data);
                            if (D.type === "verify_attestation") {
                                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$relay$2d$auth$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeJWT"])(D.attestation).payload.id !== n) return;
                                clearInterval(u), h.body.removeChild(g), this.abortController.signal.removeEventListener("abort", l), window.removeEventListener("message", w), y(D.attestation === null ? "" : D.attestation);
                            }
                        } catch (D) {
                            this.logger.warn(D);
                        }
                    };
                    h.body.appendChild(g), window.addEventListener("message", w, {
                        signal: this.abortController.signal
                    });
                });
                return this.logger.debug("jwt attestation", d), d;
            } catch (h) {
                this.logger.warn(h);
            }
            return "";
        }, this.resolve = async (i)=>{
            if (this.isDevEnv) return "";
            const { attestationId: r, hash: n, encryptedId: a } = i;
            if (r === "") {
                this.logger.debug("resolve: attestationId is empty, skipping");
                return;
            }
            if (r) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$relay$2d$auth$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeJWT"])(r).payload.id !== a) return;
                const h = await this.isValidJwtAttestation(r);
                if (h) {
                    if (!h.isVerified) {
                        this.logger.warn("resolve: jwt attestation: origin url not verified");
                        return;
                    }
                    return h;
                }
            }
            if (!n) return;
            const c = this.getVerifyUrl(i?.verifyUrl);
            return this.fetchAttestation(n, c);
        }, this.fetchAttestation = async (i, r)=>{
            this.logger.debug(`resolving attestation: ${i} from url: ${r}`);
            const n = this.startAbortTimer(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ONE_SECOND"] * 5), a = await fetch(`${r}/attestation/${i}?v2Supported=true`, {
                signal: this.abortController.signal
            });
            return clearTimeout(n), a.status === 200 ? await a.json() : void 0;
        }, this.getVerifyUrl = (i)=>{
            let r = i || X;
            return It.includes(r) || (this.logger.info(`verify url: ${r}, not included in trusted list, assigning default: ${X}`), r = X), r;
        }, this.fetchPublicKey = async ()=>{
            try {
                this.logger.debug(`fetching public key from: ${this.verifyUrlV3}`);
                const i = this.startAbortTimer(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FIVE_SECONDS"]), r = await fetch(`${this.verifyUrlV3}/public-key`, {
                    signal: this.abortController.signal
                });
                return clearTimeout(i), await r.json();
            } catch (i) {
                this.logger.warn(i);
            }
        }, this.persistPublicKey = async (i)=>{
            this.logger.debug("persisting public key to local storage", i), await this.store.setItem(this.storeKey, i), this.publicKey = i;
        }, this.removePublicKey = async ()=>{
            this.logger.debug("removing verify v2 public key from storage"), await this.store.removeItem(this.storeKey), this.publicKey = void 0;
        }, this.isValidJwtAttestation = async (i)=>{
            const r = await this.getPublicKey();
            try {
                if (r) return this.validateAttestation(i, r);
            } catch (a) {
                this.logger.error(a), this.logger.warn("error validating attestation");
            }
            const n = await this.fetchAndPersistPublicKey();
            try {
                if (n) return this.validateAttestation(i, n);
            } catch (a) {
                this.logger.error(a), this.logger.warn("error validating attestation");
            }
        }, this.getPublicKey = async ()=>this.publicKey ? this.publicKey : await this.fetchAndPersistPublicKey(), this.fetchAndPersistPublicKey = async ()=>{
            if (this.fetchPromise) return await this.fetchPromise, this.publicKey;
            this.fetchPromise = new Promise(async (r)=>{
                const n = await this.fetchPublicKey();
                n && (await this.persistPublicKey(n), r(n));
            });
            const i = await this.fetchPromise;
            return this.fetchPromise = void 0, i;
        }, this.validateAttestation = (i, r)=>{
            const n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verifyP256Jwt"])(i, r.publicKey), a = {
                hasExpired: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toMiliseconds"])(n.exp) < Date.now(),
                payload: n
            };
            if (a.hasExpired) throw this.logger.warn("resolve: jwt attestation expired"), new Error("JWT attestation expired");
            return {
                origin: a.payload.origin,
                isScam: a.payload.isScam,
                isVerified: a.payload.isVerified
            };
        }, this.logger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateChildLogger"])(t, this.name), this.abortController = new AbortController, this.isDevEnv = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTestRun"])(), this.init();
    }
    get storeKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//verify:public:key";
    }
    get context() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getLoggerContext"])(this.logger);
    }
    startAbortTimer(e) {
        return this.abortController = new AbortController, setTimeout(()=>this.abortController.abort(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toMiliseconds"])(e));
    }
}
class yi extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$types$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IEchoClient"] {
    constructor(e, t){
        super(e, t), this.projectId = e, this.logger = t, this.context = Tt, this.registerDeviceToken = async (s)=>{
            const { clientId: i, token: r, notificationType: n, enableEncrypted: a = !1 } = s, c = `${Ct}/${this.projectId}/clients`;
            await fetch(c, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    client_id: i,
                    type: n,
                    token: r,
                    always_raw: a
                })
            });
        }, this.logger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateChildLogger"])(t, this.context);
    }
}
var wn = Object.defineProperty, Di = Object.getOwnPropertySymbols, In = Object.prototype.hasOwnProperty, Tn = Object.prototype.propertyIsEnumerable, mi = (o, e, t)=>e in o ? wn(o, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : o[e] = t, Q = (o, e)=>{
    for(var t in e || (e = {}))In.call(e, t) && mi(o, t, e[t]);
    if (Di) for (var t of Di(e))Tn.call(e, t) && mi(o, t, e[t]);
    return o;
};
class bi extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$types$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IEventClient"] {
    constructor(e, t, s = !0){
        super(e, t, s), this.core = e, this.logger = t, this.context = St, this.storagePrefix = A, this.storageVersion = Pt, this.events = new Map, this.shouldPersist = !1, this.init = async ()=>{
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTestRun"])()) try {
                const i = {
                    eventId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uuidv4"])(),
                    timestamp: Date.now(),
                    domain: this.getAppDomain(),
                    props: {
                        event: "INIT",
                        type: "",
                        properties: {
                            client_id: await this.core.crypto.getClientId(),
                            user_agent: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatUA"])(this.core.relayer.protocol, this.core.relayer.version, re)
                        }
                    }
                };
                await this.sendEvent([
                    i
                ]);
            } catch (i) {
                this.logger.warn(i);
            }
        }, this.createEvent = (i)=>{
            const { event: r = "ERROR", type: n = "", properties: { topic: a, trace: c } } = i, h = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uuidv4"])(), u = this.core.projectId || "", d = Date.now(), y = Q({
                eventId: h,
                timestamp: d,
                props: {
                    event: r,
                    type: n,
                    properties: {
                        topic: a,
                        trace: c
                    }
                },
                bundleId: u,
                domain: this.getAppDomain()
            }, this.setMethods(h));
            return this.telemetryEnabled && (this.events.set(h, y), this.shouldPersist = !0), y;
        }, this.getEvent = (i)=>{
            const { eventId: r, topic: n } = i;
            if (r) return this.events.get(r);
            const a = Array.from(this.events.values()).find((c)=>c.props.properties.topic === n);
            if (a) return Q(Q({}, a), this.setMethods(a.eventId));
        }, this.deleteEvent = (i)=>{
            const { eventId: r } = i;
            this.events.delete(r), this.shouldPersist = !0;
        }, this.setEventListeners = ()=>{
            this.core.heartbeat.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$heartbeat$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HEARTBEAT_EVENTS"].pulse, async ()=>{
                this.shouldPersist && await this.persist(), this.events.forEach((i)=>{
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromMiliseconds"])(Date.now()) - (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromMiliseconds"])(i.timestamp) > Rt && (this.events.delete(i.eventId), this.shouldPersist = !0);
                });
            });
        }, this.setMethods = (i)=>({
                addTrace: (r)=>this.addTrace(i, r),
                setError: (r)=>this.setError(i, r)
            }), this.addTrace = (i, r)=>{
            const n = this.events.get(i);
            n && (n.props.properties.trace.push(r), this.events.set(i, n), this.shouldPersist = !0);
        }, this.setError = (i, r)=>{
            const n = this.events.get(i);
            n && (n.props.type = r, n.timestamp = Date.now(), this.events.set(i, n), this.shouldPersist = !0);
        }, this.persist = async ()=>{
            await this.core.storage.setItem(this.storageKey, Array.from(this.events.values())), this.shouldPersist = !1;
        }, this.restore = async ()=>{
            try {
                const i = await this.core.storage.getItem(this.storageKey) || [];
                if (!i.length) return;
                i.forEach((r)=>{
                    this.events.set(r.eventId, Q(Q({}, r), this.setMethods(r.eventId)));
                });
            } catch (i) {
                this.logger.warn(i);
            }
        }, this.submit = async ()=>{
            if (!this.telemetryEnabled || this.events.size === 0) return;
            const i = [];
            for (const [r, n] of this.events)n.props.type && i.push(n);
            if (i.length !== 0) try {
                if ((await this.sendEvent(i)).ok) for (const r of i)this.events.delete(r.eventId), this.shouldPersist = !0;
            } catch (r) {
                this.logger.warn(r);
            }
        }, this.sendEvent = async (i)=>{
            const r = this.getAppDomain() ? "" : "&sp=desktop";
            return await fetch(`${xt}?projectId=${this.core.projectId}&st=events_sdk&sv=js-${re}${r}`, {
                method: "POST",
                body: JSON.stringify(i)
            });
        }, this.getAppDomain = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAppMetadata"])().url, this.logger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateChildLogger"])(t, this.context), this.telemetryEnabled = s, s ? this.restore().then(async ()=>{
            await this.submit(), this.setEventListeners();
        }) : this.persist();
    }
    get storageKey() {
        return this.storagePrefix + this.storageVersion + this.core.customStoragePrefix + "//" + this.context;
    }
}
var Cn = Object.defineProperty, fi = Object.getOwnPropertySymbols, Pn = Object.prototype.hasOwnProperty, Sn = Object.prototype.propertyIsEnumerable, vi = (o, e, t)=>e in o ? Cn(o, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : o[e] = t, _i = (o, e)=>{
    for(var t in e || (e = {}))Pn.call(e, t) && vi(o, t, e[t]);
    if (fi) for (var t of fi(e))Sn.call(e, t) && vi(o, t, e[t]);
    return o;
};
class oe extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$types$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ICore"] {
    constructor(e){
        var t;
        super(e), this.protocol = ye, this.version = De, this.name = J, this.events = new __TURBOPACK__imported__module__$5b$externals$5d2f$events__$5b$external$5d$__$28$events$2c$__cjs$29$__["EventEmitter"], this.initialized = !1, this.on = (n, a)=>this.events.on(n, a), this.once = (n, a)=>this.events.once(n, a), this.off = (n, a)=>this.events.off(n, a), this.removeListener = (n, a)=>this.events.removeListener(n, a), this.dispatchEnvelope = ({ topic: n, message: a, sessionExists: c })=>{
            if (!n || !a) return;
            const h = {
                topic: n,
                message: a,
                publishedAt: Date.now(),
                transportType: M.link_mode
            };
            this.relayer.onLinkMessageEvent(h, {
                sessionExists: c
            });
        }, this.projectId = e?.projectId, this.relayUrl = e?.relayUrl || fe, this.customStoragePrefix = e != null && e.customStoragePrefix ? `:${e.customStoragePrefix}` : "";
        const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getDefaultLoggerOptions"])({
            level: typeof e?.logger == "string" && e.logger ? e.logger : Xe.logger,
            name: J
        }), { logger: i, chunkLoggerController: r } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generatePlatformLogger"])({
            opts: s,
            maxSizeInBytes: e?.maxLogBlobSizeInBytes,
            loggerOverride: e?.logger
        });
        this.logChunkController = r, (t = this.logChunkController) != null && t.downloadLogsBlobInBrowser && (window.downloadLogsBlobInBrowser = async ()=>{
            var n, a;
            (n = this.logChunkController) != null && n.downloadLogsBlobInBrowser && ((a = this.logChunkController) == null || a.downloadLogsBlobInBrowser({
                clientId: await this.crypto.getClientId()
            }));
        }), this.logger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateChildLogger"])(i, this.name), this.heartbeat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$heartbeat$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HeartBeat"], this.crypto = new Yt(this, this.logger, e?.keychain), this.history = new di(this, this.logger), this.expirer = new pi(this, this.logger), this.storage = e != null && e.storage ? e.storage : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$keyvaluestorage$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](_i(_i({}, We), e?.storageOptions)), this.relayer = new oi({
            core: this,
            logger: this.logger,
            relayUrl: this.relayUrl,
            projectId: this.projectId
        }), this.pairing = new ui(this, this.logger), this.verify = new gi(this, this.logger, this.storage), this.echoClient = new yi(this.projectId || "", this.logger), this.linkModeSupportedApps = [], this.eventClient = new bi(this, this.logger, e?.telemetryEnabled);
    }
    static async init(e) {
        const t = new oe(e);
        await t.initialize();
        const s = await t.crypto.getClientId();
        return await t.storage.setItem(ut, s), t;
    }
    get context() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getLoggerContext"])(this.logger);
    }
    async start() {
        this.initialized || await this.initialize();
    }
    async getLogsBlob() {
        var e;
        return (e = this.logChunkController) == null ? void 0 : e.logsToBlob({
            clientId: await this.crypto.getClientId()
        });
    }
    async addLinkModeSupportedApp(e) {
        this.linkModeSupportedApps.includes(e) || (this.linkModeSupportedApps.push(e), await this.storage.setItem(ve, this.linkModeSupportedApps));
    }
    async initialize() {
        this.logger.trace("Initialized");
        try {
            await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.linkModeSupportedApps = await this.storage.getItem(ve) || [], this.initialized = !0, this.logger.info("Core Initialization Success");
        } catch (e) {
            throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, e), this.logger.error(e.message), e;
        }
    }
}
const Rn = oe;
;
 //# sourceMappingURL=index.es.js.map
}}),

};

//# sourceMappingURL=e2162_%40walletconnect_core_dist_index_es_9c47f6.js.map