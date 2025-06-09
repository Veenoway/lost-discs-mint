module.exports = {

"[project]/src/contract/index.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "NFT_ABI": (()=>NFT_ABI),
    "NFT_ADDRESS": (()=>NFT_ADDRESS)
});
const NFT_ADDRESS = "0xAd44B80aeC3a122a8E0561F5c9C1CaE9Ba062113";
const NFT_ABI = [
    {
        inputs: [],
        name: "MAX_SUPPLY",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "PRICE",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "totalMinted",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "remainingSupply",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "paused",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_user",
                type: "address"
            }
        ],
        name: "getUserMintStatus",
        outputs: [
            {
                internalType: "bool",
                name: "canCurrentlyMint",
                type: "bool"
            },
            {
                internalType: "uint256",
                name: "mintsDone",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "mintsAllowed",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "mintsRemaining",
                type: "uint256"
            },
            {
                internalType: "string",
                name: "userStatus",
                type: "string"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "getMintPhaseInfo",
        outputs: [
            {
                internalType: "string",
                name: "currentPhase",
                type: "string"
            },
            {
                internalType: "bool",
                name: "isActive",
                type: "bool"
            },
            {
                internalType: "uint256",
                name: "totalSupply",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "mintedCount",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "remainingCount",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_user",
                type: "address"
            }
        ],
        name: "getUserNFTsDetailed",
        outputs: [
            {
                internalType: "uint256[]",
                name: "userTokens",
                type: "uint256[]"
            },
            {
                internalType: "uint256[]",
                name: "metadata",
                type: "uint256[]"
            },
            {
                internalType: "string[]",
                name: "tokenURIs",
                type: "string[]"
            },
            {
                internalType: "uint256",
                name: "totalOwned",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256"
            }
        ],
        name: "tokenURI",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bool",
                name: "isOG",
                type: "bool"
            }
        ],
        name: "mint",
        outputs: [],
        stateMutability: "payable",
        type: "function"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address"
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "metadata",
                type: "uint256"
            }
        ],
        name: "Minted",
        type: "event"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_user",
                type: "address"
            }
        ],
        name: "isWhitelisted",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_user",
                type: "address"
            }
        ],
        name: "isOG",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_user",
                type: "address"
            }
        ],
        name: "isFCFS",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_user",
                type: "address"
            }
        ],
        name: "isTeamMember",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_user",
                type: "address"
            }
        ],
        name: "canMintPublic",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "view",
        type: "function"
    }
];
}}),
"[project]/src/hooks/useNFTInteraction.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useNFT": (()=>useNFT)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contract$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/contract/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/wagmi/dist/esm/hooks/useAccount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConnect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/wagmi/dist/esm/hooks/useConnect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$usePublicClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/wagmi/dist/esm/hooks/usePublicClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/wagmi/dist/esm/hooks/useReadContract.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWriteContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/wagmi/dist/esm/hooks/useWriteContract.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWaitForTransactionReceipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/wagmi/dist/esm/hooks/useWaitForTransactionReceipt.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$readContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/viem/_esm/actions/public/readContract.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatUnits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/viem/_esm/utils/unit/formatUnits.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$parseUnits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/viem/_esm/utils/unit/parseUnits.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$waitForTransactionReceipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/viem/_esm/actions/public/waitForTransactionReceipt.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function useNFT() {
    const { address, isConnected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAccount"])();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const { connect, connectors } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConnect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useConnect"])();
    const publicClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$usePublicClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePublicClient"])();
    const [lastMintedTokenId, setLastMintedTokenId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const isFirstMount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(true);
    const [mintPrice, setMintPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(BigInt(0));
    const [userNFTs, setUserNFTs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [nftMetadata, setNftMetadata] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoadingNFTs, setIsLoadingNFTs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const refreshIntervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { data: maxSupply } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReadContract"])({
        address: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contract$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NFT_ADDRESS"],
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contract$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NFT_ABI"],
        functionName: "MAX_SUPPLY"
    });
    const { data: totalMinted } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReadContract"])({
        address: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contract$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NFT_ADDRESS"],
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contract$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NFT_ABI"],
        functionName: "totalMinted"
    });
    const { data: price } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReadContract"])({
        address: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contract$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NFT_ADDRESS"],
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contract$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NFT_ABI"],
        functionName: "PRICE"
    });
    const { data: remainingSupply } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReadContract"])({
        address: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contract$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NFT_ADDRESS"],
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contract$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NFT_ABI"],
        functionName: "remainingSupply"
    });
    const { data: isPaused } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReadContract"])({
        address: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contract$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NFT_ADDRESS"],
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contract$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NFT_ABI"],
        functionName: "paused"
    });
    const { data: userMintStatus } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReadContract"])({
        address: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contract$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NFT_ADDRESS"],
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contract$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NFT_ABI"],
        functionName: "getUserMintStatus",
        args: address ? [
            address
        ] : undefined
    });
    const { data: mintPhaseInfo } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReadContract"])({
        address: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contract$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NFT_ADDRESS"],
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contract$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NFT_ABI"],
        functionName: "getMintPhaseInfo"
    });
    const { data: isUserWL } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReadContract"])({
        address: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contract$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NFT_ADDRESS"],
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contract$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NFT_ABI"],
        functionName: "isWhitelisted",
        args: address ? [
            address
        ] : undefined
    });
    const { data: isUserOG } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReadContract"])({
        address: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contract$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NFT_ADDRESS"],
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contract$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NFT_ABI"],
        functionName: "isOG",
        args: address ? [
            address
        ] : undefined
    });
    const { data: isUserFCFS } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReadContract"])({
        address: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contract$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NFT_ADDRESS"],
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contract$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NFT_ABI"],
        functionName: "isFCFS",
        args: address ? [
            address
        ] : undefined
    });
    const { data: isUserTeam } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReadContract"])({
        address: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contract$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NFT_ADDRESS"],
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contract$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NFT_ABI"],
        functionName: "isTeamMember",
        args: address ? [
            address
        ] : undefined
    });
    const { writeContract, data: hash, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWriteContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWriteContract"])();
    const { isLoading: isMintLoading, isSuccess: isMintSuccess } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWaitForTransactionReceipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWaitForTransactionReceipt"])({
        hash
    });
    const createDefaultMetadata = (nft)=>{
        return {
            tokenId: nft.tokenId,
            metadataId: nft.metadataId,
            name: `LIL MONK #${nft.tokenId.toString()}`,
            description: "Metadata unavailable",
            image: "/preview.gif",
            attributes: []
        };
    };
    const fetchMetadataForNFTs = async (nfts)=>{
        if (!nfts || nfts.length === 0) {
            return [];
        }
        const IPFS_GATEWAY = "https://ipfs.io/ipfs/";
        const fetchWithRetry = async (url, retries = 2)=>{
            let lastError;
            for(let i = 0; i <= retries; i++){
                try {
                    const response = await fetch(url, {
                        cache: "no-store"
                    });
                    if (!response.ok) {
                        throw new Error(`HTTP error: ${response.status}`);
                    }
                    const contentType = response.headers.get("content-type");
                    if (contentType && contentType.includes("application/json")) {
                        return await response.json();
                    }
                    const text = await response.text();
                    try {
                        return JSON.parse(text);
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    } catch (_error) {
                        throw new Error("Response is not valid JSON");
                    }
                } catch (error) {
                    lastError = error;
                    if (i < retries) {
                        await new Promise((resolve)=>setTimeout(resolve, 1000));
                    }
                }
            }
            throw lastError || new Error("Failed to fetch after retries");
        };
        const metadataPromises = nfts.map(async (nft)=>{
            try {
                if (!nft.tokenURI) {
                    return createDefaultMetadata(nft);
                }
                let metadataUrl = nft.tokenURI;
                if (metadataUrl.startsWith("ipfs://")) {
                    metadataUrl = metadataUrl.replace("ipfs://", IPFS_GATEWAY);
                }
                const data = await fetchWithRetry(metadataUrl);
                if (!data || typeof data !== "object") {
                    throw new Error("Invalid metadata format");
                }
                console.log("dataaaaaaa", data);
                const imageUrl = data.image || "/preview.gif";
                let normalizedImageUrl = imageUrl;
                if (imageUrl.startsWith("ipfs://")) {
                    normalizedImageUrl = imageUrl.replace("ipfs://", IPFS_GATEWAY);
                }
                const metadata = {
                    tokenId: nft.tokenId,
                    metadataId: nft.metadataId,
                    name: data.name || `NFT #${nft.tokenId.toString()}`,
                    description: data.description || "",
                    image: imageUrl,
                    attributes: data.attributes || []
                };
                setUserNFTs((currentNFTs)=>currentNFTs.map((currentNft)=>{
                        if (currentNft.tokenId === nft.tokenId) {
                            return {
                                ...currentNft,
                                metadata: metadata,
                                normalizedImage: normalizedImageUrl
                            };
                        }
                        return currentNft;
                    }));
                return metadata;
            } catch (error) {
                console.error(`Error fetching metadata for NFT #${nft.tokenId.toString()}:`, error);
                return createDefaultMetadata(nft);
            }
        });
        console.log("user", userNFTs);
        const results = await Promise.allSettled(metadataPromises);
        console.log("results", results);
        const metadata = results.filter((result)=>result.status === "fulfilled").map((result)=>result.value);
        return metadata;
    };
    const refreshUserNFTs = async ()=>{
        if (!address || !publicClient) {
            return null;
        }
        if (isLoadingNFTs) {
            return null;
        }
        setIsLoadingNFTs(true);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$readContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readContract"])(publicClient, {
                address: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contract$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NFT_ADDRESS"],
                abi: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contract$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NFT_ABI"],
                functionName: "totalMinted"
            });
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$readContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readContract"])(publicClient, {
                address: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contract$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NFT_ADDRESS"],
                abi: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contract$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NFT_ABI"],
                functionName: "getUserNFTsDetailed",
                args: [
                    address
                ]
            });
            if (!result || !Array.isArray(result) || result.length < 4) {
                setUserNFTs([]);
                setNftMetadata([]);
                setIsLoadingNFTs(false);
                return [];
            }
            const [userTokensArray, metadataArray, tokenURIsArray] = result;
            const userTokens = userTokensArray;
            const metadataIds = metadataArray;
            const tokenURIs = tokenURIsArray;
            if (!userTokens.length) {
                setUserNFTs([]);
                setNftMetadata([]);
                setIsLoadingNFTs(false);
                return [];
            }
            const nftDetails = Array.from({
                length: userTokens.length
            }, (_, i)=>{
                const tokenId = userTokens[i];
                const existingNFT = userNFTs.find((nft)=>nft.tokenId === tokenId);
                return {
                    tokenId,
                    metadataId: metadataIds[i],
                    tokenURI: tokenURIs[i] || "",
                    metadata: existingNFT?.metadata,
                    normalizedImage: existingNFT?.normalizedImage || "/preview.gif"
                };
            });
            setUserNFTs(nftDetails);
            const nftsNeedingMetadata = nftDetails.filter((nft)=>!nft.metadata);
            if (nftsNeedingMetadata.length > 0) {
                console.log(`Fetching metadata for ${nftsNeedingMetadata.length} NFTs`);
                fetchMetadataForNFTs(nftsNeedingMetadata).then((newMetadata)=>{
                    setNftMetadata((currentMetadata)=>[
                            ...currentMetadata.filter((m)=>!newMetadata.some((nm)=>nm.tokenId === m.tokenId)),
                            ...newMetadata
                        ]);
                });
            }
            setIsLoadingNFTs(false);
            return nftDetails;
        } catch (error) {
            console.error("Error while refreshing NFTs:", error);
            setIsLoadingNFTs(false);
            return null;
        }
    };
    const formatMON = (weiAmount)=>{
        if (!weiAmount) return "0";
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatUnits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatUnits"])(weiAmount, 18);
    };
    const parseMON = (monAmount)=>{
        try {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$parseUnits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseUnits"])(monAmount, 18);
        } catch (error) {
            console.error("Error parsing MON amount:", error);
            return BigInt(0);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        getMintPrice();
    }, [
        mintPhaseInfo
    ]);
    const getMintPrice = ()=>{
        const currentPhase = formatMintPhaseInfo()?.currentPhase;
        if (typeof isUserTeam !== "undefined" && isUserTeam !== null && Boolean(isUserTeam)) {
            return BigInt(0);
        }
        switch(currentPhase){
            case "Team Only":
                {
                    setMintPrice(BigInt(0));
                    return BigInt(0);
                }
            case "Whitelist":
                {
                    setMintPrice(BigInt(1 * 10 ** 18));
                    return BigInt(1 * 10 ** 18);
                }
            case "First Come First Served":
                {
                    setMintPrice(BigInt(3 * 10 ** 18));
                    return BigInt(3 * 10 ** 18);
                }
            case "Public Mint":
                {
                    setMintPrice(BigInt(50 * 10 ** 18));
                    return BigInt(50 * 10 ** 18);
                }
            default:
                return BigInt(0);
        }
    };
    const getFormattedPrice = ()=>{
        const mintPrice = getMintPrice();
        return formatMON(mintPrice);
    };
    const mint = async (isOG = false)=>{
        if (!isConnected) {
            await connect({
                connector: connectors[0]
            });
            return null;
        }
        if (!publicClient) {
            throw new Error("Client unavailable");
        }
        const mintPrice = getMintPrice();
        try {
            const txHash = await writeContract({
                address: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contract$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NFT_ADDRESS"],
                abi: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contract$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NFT_ABI"],
                functionName: "mint",
                args: [
                    isOG
                ],
                value: mintPrice,
                account: address,
                gas: BigInt(300000)
            });
            if (typeof txHash === "string") {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$waitForTransactionReceipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["waitForTransactionReceipt"])(publicClient, {
                    hash: txHash,
                    confirmations: 1
                });
                invalidateQueries();
                try {
                    const currentTotalMinted = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$readContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readContract"])(publicClient, {
                        address: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contract$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NFT_ADDRESS"],
                        abi: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contract$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NFT_ABI"],
                        functionName: "totalMinted"
                    });
                    const newTokenId = currentTotalMinted - BigInt(1);
                    setLastMintedTokenId(newTokenId);
                } catch (err) {
                    console.error("Error retrieving totalMinted:", err);
                }
                return {
                    success: true,
                    hash: txHash
                };
            } else {
                throw new Error("Invalid transaction hash");
            }
        } catch (error) {
            console.error("Error during mint:", error);
            throw new Error("Transaction failed. Check parameters and try again.");
        }
    };
    const invalidateQueries = ()=>{
        if (!queryClient) return;
        const queries = [
            "totalMinted",
            "MAX_SUPPLY",
            "getUserMintStatus",
            "remainingSupply",
            "getMintPhaseInfo",
            "getUserNFTsDetailed"
        ].map((functionName)=>({
                queryKey: [
                    "readContract",
                    {
                        address: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contract$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NFT_ADDRESS"],
                        functionName
                    }
                ]
            }));
        queries.forEach((query)=>queryClient.invalidateQueries(query));
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (address && publicClient) {
            if (isFirstMount.current) {
                refreshUserNFTs();
                isFirstMount.current = false;
            }
            refreshIntervalRef.current = setInterval(()=>{
                console.log("Rafraîchissement automatique des données");
                refreshUserNFTs();
                invalidateQueries();
            }, 10000);
            return ()=>{
                if (refreshIntervalRef.current) {
                    clearInterval(refreshIntervalRef.current);
                    refreshIntervalRef.current = null;
                }
            };
        }
    }, [
        address,
        publicClient
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isMintSuccess) {
            if (refreshIntervalRef.current) {
                clearInterval(refreshIntervalRef.current);
                refreshIntervalRef.current = null;
            }
            invalidateQueries();
            const refreshSequence = [
                {
                    delay: 1000,
                    message: "Premier rafraîchissement immédiat après le mint"
                },
                {
                    delay: 3000,
                    message: "Deuxième rafraîchissement pour vérifier les métadonnées"
                },
                {
                    delay: 8000,
                    message: "Troisième rafraîchissement pour confirmer tous les NFTs"
                },
                {
                    delay: 15000,
                    message: "Rafraîchissement final pour validation complète"
                }
            ];
            let totalDelay = 0;
            refreshSequence.forEach((step, index)=>{
                totalDelay += step.delay;
                setTimeout(async ()=>{
                    try {
                        console.log(`${step.message} - Séquence ${index + 1}/${refreshSequence.length}`);
                        await refreshUserNFTs();
                        if (index === refreshSequence.length - 1 && address && publicClient) {
                            refreshIntervalRef.current = setInterval(()=>{
                                console.log("Rafraîchissement automatique des données");
                                refreshUserNFTs();
                                invalidateQueries();
                            }, 10000);
                        }
                    } catch (error) {
                        console.error(`Erreur pendant le rafraîchissement #${index + 1}:`, error);
                    }
                }, totalDelay);
            });
        }
    }, [
        isMintSuccess,
        address,
        publicClient
    ]);
    const formatUserMintStatus = ()=>{
        if (!userMintStatus || !Array.isArray(userMintStatus) || userMintStatus.length < 5) {
            return null;
        }
        return {
            canCurrentlyMint: Boolean(userMintStatus[0]),
            mintsDone: Number(userMintStatus[1]),
            mintsAllowed: Number(userMintStatus[2]),
            mintsRemaining: Number(userMintStatus[3]),
            userStatus: String(userMintStatus[4])
        };
    };
    const formatMintPhaseInfo = ()=>{
        if (!mintPhaseInfo || !Array.isArray(mintPhaseInfo) || mintPhaseInfo.length < 5) {
            return null;
        }
        return {
            currentPhase: String(mintPhaseInfo[0]),
            isActive: Boolean(mintPhaseInfo[1]),
            totalSupply: Number(mintPhaseInfo[2]),
            mintedCount: Number(mintPhaseInfo[3]),
            remainingCount: Number(mintPhaseInfo[4])
        };
    };
    return {
        maxSupply: Number(maxSupply ?? 0),
        totalMinted: Number(totalMinted ?? 0),
        price,
        remainingSupply: Number(remainingSupply ?? 0),
        isPaused: Boolean(isPaused),
        mint,
        isLoading: isMintLoading,
        isSuccess: isMintSuccess,
        error,
        refreshUserNFTs,
        lastMintedTokenId,
        isLoadingNFTs,
        getMintPrice,
        getFormattedPrice,
        formatMON,
        parseMON,
        isConnected,
        userMintStatus: formatUserMintStatus(),
        isUserWL: Boolean(isUserWL),
        isUserOG: Boolean(isUserOG),
        isUserFCFS: Boolean(isUserFCFS),
        isUserTeam: Boolean(isUserTeam),
        mintPhaseInfo: formatMintPhaseInfo(),
        mintPrice,
        nftMetadata,
        userNFTs
    };
}
}}),
"[project]/src/components/UserNFTs.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "UserNFTs": (()=>UserNFTs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useNFTInteraction$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/hooks/useNFTInteraction.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/wagmi/dist/esm/hooks/useAccount.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function UserNFTs() {
    const { refreshUserNFTs, userNFTs, isLoadingNFTs } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useNFTInteraction$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useNFT"])();
    const { address } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAccount"])();
    const hasInitialized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (address && !hasInitialized.current) {
            console.log("Initial NFT loading");
            refreshUserNFTs().then(()=>{
                hasInitialized.current = true;
            });
        }
    }, [
        address,
        refreshUserNFTs
    ]);
    const handleRefresh = async ()=>{
        if (isLoadingNFTs) {
            return;
        }
        try {
            console.log("Manual NFT refresh");
            await refreshUserNFTs();
        } catch (error) {
            console.error("Error refreshing NFTs:", error);
        }
    };
    if (!address) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl sm:text-4xl text-white mb-4",
                    children: "MY NFTS (0)"
                }, void 0, false, {
                    fileName: "[project]/src/components/UserNFTs.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-48 flex items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[rgba(255,255,255,1)] uppercase text-xl sm:text-3xl",
                        children: "Connect your wallet to see your NFTs"
                    }, void 0, false, {
                        fileName: "[project]/src/components/UserNFTs.tsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/UserNFTs.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/UserNFTs.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-5 sm:mt-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl sm:text-4xl text-white uppercase",
                        children: [
                            "MY NFTS (",
                            userNFTs.length || 0,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/UserNFTs.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleRefresh,
                            className: `${isLoadingNFTs ? "bg-[rgba(255,255,255,0.1)] cursor-not-allowed" : "bg-brandColor hover:bg-[#6C07D1]"} px-6 py-2 rounded text-base sm:text-xl flex uppercase transition-all duration-300 ease-in-out items-center gap-2`,
                            disabled: isLoadingNFTs,
                            children: [
                                isLoadingNFTs && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "animate-spin mr-2 ",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: 24,
                                        height: 24,
                                        viewBox: "0 0 24 24",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "animate-spin",
                                        fill: "none",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                className: "opacity-25",
                                                cx: "12",
                                                cy: "12",
                                                r: "10",
                                                stroke: "currentColor",
                                                strokeWidth: 2
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/UserNFTs.tsx",
                                                lineNumber: 72,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                className: "opacity-75",
                                                fill: "currentColor",
                                                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/UserNFTs.tsx",
                                                lineNumber: 80,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/UserNFTs.tsx",
                                        lineNumber: 64,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/UserNFTs.tsx",
                                    lineNumber: 63,
                                    columnNumber: 15
                                }, this),
                                "Refresh"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/UserNFTs.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/UserNFTs.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/UserNFTs.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            userNFTs && userNFTs.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 mt-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",
                children: userNFTs.map((nft)=>{
                    const tokenId = nft.tokenId.toString();
                    const nftName = nft.metadata?.name || `NFT #${tokenId}`;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative transition-all duration-500 rounded-lg transform hover:scale-105",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[rgba(255,255,255,0.1)] backdrop-blur-md rounded-lg overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-full h-auto",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: nft.normalizedImage,
                                            alt: nftName,
                                            width: 400,
                                            height: 262,
                                            className: "w-full h-[180px] sm:h-[230px] object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/UserNFTs.tsx",
                                            lineNumber: 105,
                                            columnNumber: 21
                                        }, this),
                                        !nft.metadata && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-yellow-300 animate-pulse",
                                                children: "LOADING..."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/UserNFTs.tsx",
                                                lineNumber: 115,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/UserNFTs.tsx",
                                            lineNumber: 114,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/UserNFTs.tsx",
                                    lineNumber: 104,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-2 sm:px-4 py-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-white text-base sm:text-xl uppercase font-bold",
                                        children: nftName
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/UserNFTs.tsx",
                                        lineNumber: 122,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/UserNFTs.tsx",
                                    lineNumber: 121,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/UserNFTs.tsx",
                            lineNumber: 103,
                            columnNumber: 17
                        }, this)
                    }, `nft-${tokenId}`, false, {
                        fileName: "[project]/src/components/UserNFTs.tsx",
                        lineNumber: 99,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/UserNFTs.tsx",
                lineNumber: 94,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-48 flex items-center justify-center",
                children: isLoadingNFTs ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[rgba(255,255,255,0.7)] text-xl",
                        children: "LOADING YOUR NFTs..."
                    }, void 0, false, {
                        fileName: "[project]/src/components/UserNFTs.tsx",
                        lineNumber: 135,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/UserNFTs.tsx",
                    lineNumber: 134,
                    columnNumber: 13
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-white uppercase text-xl",
                    children: "No NFTs found. You can try refreshing the collection."
                }, void 0, false, {
                    fileName: "[project]/src/components/UserNFTs.tsx",
                    lineNumber: 140,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/UserNFTs.tsx",
                lineNumber: 132,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/UserNFTs.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/feature/home/index.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "NFT": (()=>NFT)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$connect$2d$modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/connect-modal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UserNFTs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/UserNFTs.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useNFTInteraction$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/hooks/useNFTInteraction.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/wagmi/dist/esm/hooks/useAccount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useSwitchChain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/wagmi/dist/esm/hooks/useSwitchChain.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const BackgroundWrapper = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed top-0 left-0 w-full h-full z-0 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                autoPlay: true,
                loop: true,
                muted: true,
                playsInline: true,
                className: "absolute top-0 left-0 w-full h-full object-cover",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                    src: "/background/lost_disc.mp4",
                    type: "video/mp4"
                }, void 0, false, {
                    fileName: "[project]/src/feature/home/index.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/feature/home/index.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute bottom-0 left-0 w-1/3 h-1/3",
                initial: {
                    y: "20%",
                    scale: 1,
                    opacity: 1
                },
                animate: {
                    y: 0,
                    scale: 1,
                    opacity: 1
                },
                transition: {
                    duration: 1,
                    ease: "easeInOut"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "/background/left.png",
                    alt: "Left layer",
                    className: "w-full h-full object-cover"
                }, void 0, false, {
                    fileName: "[project]/src/feature/home/index.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/feature/home/index.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute bottom-0 right-0 w-0.7/3 h-1/3",
                initial: {
                    y: "20%",
                    scale: 1,
                    opacity: 1
                },
                animate: {
                    y: 0,
                    scale: 1,
                    opacity: 1
                },
                transition: {
                    duration: 1,
                    ease: "easeInOut"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "/background/right.png",
                    alt: "Right layer",
                    className: "w-full h-full object-cover"
                }, void 0, false, {
                    fileName: "[project]/src/feature/home/index.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/feature/home/index.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/feature/home/index.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
};
const AudioPlayer = ()=>{
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentTrack, setCurrentTrack] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const audioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const tracks = [
        "/music/unlocked_fate.wav",
        "/music/we_are_monshape.wav"
    ];
    const playNext = ()=>{
        const nextTrack = (currentTrack + 1) % tracks.length;
        setCurrentTrack(nextTrack);
        if (audioRef.current) {
            audioRef.current.src = tracks[nextTrack];
            if (isPlaying) {
                audioRef.current.play();
            }
        }
    };
    const togglePlay = ()=>{
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const audio = audioRef.current;
        if (!audio) return;
        const handleEnded = ()=>{
            playNext();
        };
        audio.addEventListener("ended", handleEnded);
        return ()=>{
            audio.removeEventListener("ended", handleEnded);
        };
    }, [
        currentTrack
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed w-[342px] bottom-[60px] bg-white/10 border rounded-xl border-white/30 h-[57px] left-[60px] z-50 backdrop-blur-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative pl-[90px] flex items-center justify-between gap-2 p-2 ",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "/background/music_player.gif",
                    alt: "Music",
                    className: "w-[126px] h-[173px] absolute bottom-1/2 translate-y-1/2 translate-x-1/2 -left-[115px]"
                }, void 0, false, {
                    fileName: "[project]/src/feature/home/index.tsx",
                    lineNumber: 101,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
                    ref: audioRef,
                    src: tracks[currentTrack]
                }, void 0, false, {
                    fileName: "[project]/src/feature/home/index.tsx",
                    lineNumber: 106,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col justify-center -mt-[3px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-white text-base uppercase",
                            children: "Song name"
                        }, void 0, false, {
                            fileName: "[project]/src/feature/home/index.tsx",
                            lineNumber: 108,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-white/50 text-sm",
                            children: currentTrack ? "We Are Monshape" : "Unlocked Fate"
                        }, void 0, false, {
                            fileName: "[project]/src/feature/home/index.tsx",
                            lineNumber: 109,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/feature/home/index.tsx",
                    lineNumber: 107,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: togglePlay,
                    className: "w-10 h-10 flex items-center justify-center rounded-full bg-[#A314B4] hover:bg-opacity-80 transition-all",
                    children: isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        strokeWidth: 1.5,
                        stroke: "currentColor",
                        className: "w-6 h-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M15.75 5.25v13.5m-7.5-13.5v13.5"
                        }, void 0, false, {
                            fileName: "[project]/src/feature/home/index.tsx",
                            lineNumber: 126,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/feature/home/index.tsx",
                        lineNumber: 118,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        strokeWidth: 1.5,
                        stroke: "currentColor",
                        className: "w-6 h-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                        }, void 0, false, {
                            fileName: "[project]/src/feature/home/index.tsx",
                            lineNumber: 141,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/feature/home/index.tsx",
                        lineNumber: 133,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/feature/home/index.tsx",
                    lineNumber: 113,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: playNext,
                    className: "w-10 h-10 flex items-center justify-center rounded-full bg-[#A314B4] hover:bg-opacity-80 transition-all",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        strokeWidth: 1.5,
                        stroke: "currentColor",
                        className: "w-6 h-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M3 8.689c0-.866.66-1.567 1.474-1.567h2.21c.791 0 1.474.7 1.474 1.567v6.662c0 .866-.683 1.567-1.474 1.567H4.474c-.814 0-1.474-.7-1.474-1.567V8.69zM12.426 8.689c0-.866.66-1.567 1.474-1.567h2.21c.791 0 1.474.7 1.474 1.567v6.662c0 .866-.683 1.567-1.474 1.567h-2.21c-.814 0-1.474-.7-1.474-1.567V8.69z"
                        }, void 0, false, {
                            fileName: "[project]/src/feature/home/index.tsx",
                            lineNumber: 161,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/feature/home/index.tsx",
                        lineNumber: 153,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/feature/home/index.tsx",
                    lineNumber: 149,
                    columnNumber: 9
                }, this),
                " "
            ]
        }, void 0, true, {
            fileName: "[project]/src/feature/home/index.tsx",
            lineNumber: 100,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/feature/home/index.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
};
function NFT() {
    const { address, chainId, isDisconnected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAccount"])();
    const { switchChainAsync } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useSwitchChain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSwitchChain"])();
    const isWrongNetwork = chainId !== 10143;
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mintingStep, setMintingStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [, setLastMintedNFT] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const loadingTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const successTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { maxSupply, totalMinted, isPaused, mint, isSuccess: isMintSuccess, userMintStatus, mintPhaseInfo, refreshUserNFTs, lastMintedTokenId, isUserWL, isUserFCFS, isUserTeam } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useNFTInteraction$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useNFT"])();
    const canCurrentlyMint = userMintStatus?.canCurrentlyMint;
    const userMints = userMintStatus?.mintsDone || 0;
    const maxMintsPerAddress = userMintStatus?.mintsAllowed || 1;
    const userStatusInfo = userMintStatus?.userStatus || "";
    const isWhitelisted = userStatusInfo.includes("WHITELIST") || userStatusInfo.includes("OG");
    const whitelistOnly = mintPhaseInfo?.currentPhase === "WHITELIST" || mintPhaseInfo?.currentPhase === "OG_SALE";
    const handleSwitchNetwork = async ()=>{
        try {
            await switchChainAsync({
                chainId: 10143
            });
        } catch (error) {
            console.error("Network switching error:", error);
        }
    };
    const handleMint = async ()=>{
        try {
            setMintingStep("preparing");
            if (chainId !== 10143) {
                await handleSwitchNetwork();
                return;
            }
            const result = await mint(false);
            setMintingStep("confirming");
            if (result && result.success) {
                setMintingStep("success");
                if (successTimeoutRef.current) {
                    clearTimeout(successTimeoutRef.current);
                }
                successTimeoutRef.current = setTimeout(()=>{
                    setMintingStep("idle");
                    successTimeoutRef.current = null;
                }, 3000);
                setTimeout(()=>{
                    if (lastMintedTokenId) {
                        setLastMintedNFT({
                            id: String(lastMintedTokenId),
                            image: "/placeholder-nft.png"
                        });
                    } else {
                        checkForNFTMetadata();
                    }
                    if (successTimeoutRef.current) {
                        clearTimeout(successTimeoutRef.current);
                        successTimeoutRef.current = null;
                    }
                }, 1000);
            }
        } catch (error) {
            console.error("Mint error:", error);
        }
    };
    const [attempts, setAttempts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const MAX_ATTEMPTS = 2;
    const checkForNFTMetadata = async ()=>{
        if (attempts >= MAX_ATTEMPTS) {
            if (lastMintedTokenId) {
                setLastMintedNFT({
                    id: String(lastMintedTokenId),
                    image: "/placeholder-nft.png"
                });
            } else if (totalMinted) {
                const tokenId = Number(totalMinted) - 1;
                setLastMintedNFT({
                    id: String(tokenId),
                    image: "/placeholder-nft.png"
                });
            }
            return;
        }
        setAttempts((prev)=>prev + 1);
        try {
            await refreshUserNFTs();
            if (lastMintedTokenId) {
                setLastMintedNFT({
                    id: String(lastMintedTokenId),
                    image: "/placeholder-nft.png"
                });
                return;
            }
            if (totalMinted) {
                const tokenId = Number(totalMinted) - 1;
                setLastMintedNFT({
                    id: String(tokenId),
                    image: "/placeholder-nft.png"
                });
            } else {
                setLastMintedNFT({
                    id: "?",
                    image: "/placeholder-nft.png"
                });
            }
        } catch (error) {
            console.error("Error checking NFT metadata:", error);
            setLastMintedNFT({
                id: lastMintedTokenId ? String(lastMintedTokenId) : "?",
                image: "/placeholder-nft.png"
            });
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isMintSuccess) {
            setMintingStep("success");
            if (successTimeoutRef.current) {
                clearTimeout(successTimeoutRef.current);
            }
            successTimeoutRef.current = setTimeout(()=>{
                setMintingStep("idle");
                successTimeoutRef.current = null;
            }, 3000);
        }
    }, [
        isMintSuccess
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return ()=>{
            if (loadingTimeoutRef.current) {
                clearTimeout(loadingTimeoutRef.current);
            }
            if (successTimeoutRef.current) {
                clearTimeout(successTimeoutRef.current);
            }
        };
    }, []);
    const isSoldOut = totalMinted >= maxSupply;
    const userCanMint = canCurrentlyMint && !isPaused && (!whitelistOnly || isWhitelisted);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const hasSeenPopup = localStorage.getItem("hasSeenCollectionInfoPopup");
        if (hasSeenPopup) {}
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "min-h-screen w-screen text-white flex flex-col sm:pt-0 transition-all duration-1000 ease-in-out relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BackgroundWrapper, {}, void 0, false, {
                        fileName: "[project]/src/feature/home/index.tsx",
                        lineNumber: 360,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-[1100px] w-[90%] mx-auto mt-[40px] lg:mt-[40px] flex lg:flex-row flex-col items-center lg:justify-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "max-w-[436px] flex flex-col lg:items-start items-center text-white font-medium text-xl",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full p-5 sm:p-9 rounded-xl bg-[#ffffff13] border border-[rgba(255,255,255,0.37)] relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "uppercase text-white font-[900] text-3xl mb-1",
                                                children: "300 Lost discs."
                                            }, void 0, false, {
                                                fileName: "[project]/src/feature/home/index.tsx",
                                                lineNumber: 365,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-white/90 text-base text-center sm:text-left sm:text-lg font-normal",
                                                children: "4 energy codes. One path to unlock the legend. Each disc holds a fragment of the Legendary Code - echoing Astraea' memory, resonating with NADS, pulsing through the Monad ecosystem, and sparking ancient legacy. Mint now to receive one of four mysterious traits, each unlocking real benefits from Monshape or its ecosystem partners."
                                            }, void 0, false, {
                                                fileName: "[project]/src/feature/home/index.tsx",
                                                lineNumber: 368,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/feature/home/index.tsx",
                                        lineNumber: 364,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/feature/home/index.tsx",
                                    lineNumber: 363,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full flex flex-col items-center justify-center mt-5 sm:mt-10",
                                            children: [
                                                address && isWrongNetwork ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "bg-[#858585] w-[60%] justify-center mx-auto flex items-center rounded h-[60px] sm:h-[85px] py-5 text-3xl uppercase text-white transition-all duration-300 ease-in-out mt-3",
                                                    onClick: handleSwitchNetwork,
                                                    children: "Switch Network"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/feature/home/index.tsx",
                                                    lineNumber: 382,
                                                    columnNumber: 19
                                                }, this) : null,
                                                !address && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$connect$2d$modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WalletModal"], {
                                                    open: open,
                                                    setOpen: setOpen,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setOpen(true),
                                                        className: "bg-brandColor w-[60%] justify-center mx-auto flex items-center rounded h-[60px] sm:h-[85px] py-5 text-3xl uppercase text-white transition-all duration-300 ease-in-out mt-3",
                                                        children: "Connect Wallet"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/feature/home/index.tsx",
                                                        lineNumber: 392,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/feature/home/index.tsx",
                                                    lineNumber: 391,
                                                    columnNumber: 19
                                                }, this),
                                                address && !isWrongNetwork && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center flex-col lg:flex-row gap-3 mt-3 w-full mb-0 uppercase",
                                                    children: isSoldOut ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "bg-[#858585] w-[60%] justify-center mx-auto flex items-center rounded h-[60px] sm:h-[85px] py-5 text-3xl uppercase text-white transition-all duration-300 ease-in-out mt-3",
                                                        children: "Sold out!"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/feature/home/index.tsx",
                                                        lineNumber: 404,
                                                        columnNumber: 23
                                                    }, this) : userCanMint ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-5 w-full justify-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: `
                          ${mintingStep === "idle" || mintingStep === "preparing" || mintingStep === "confirming" ? "bg-[#A314B4] hover:bg-opacity-80" : mintingStep === "success" ? "bg-[#241F6F]" : "bg-[#858585] cursor-not-allowed"} 
                           w-[60%] justify-center mx-auto flex items-center rounded h-[60px] sm:h-[85px] py-5 text-3xl uppercase text-white transition-all duration-300 ease-in-out mt-3
                       
                        `,
                                                            onClick: handleMint,
                                                            disabled: mintingStep !== "idle" && mintingStep !== "error",
                                                            children: [
                                                                mintingStep === "preparing" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2",
                                                                    children: "Preparing..."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/feature/home/index.tsx",
                                                                    lineNumber: 429,
                                                                    columnNumber: 29
                                                                }, this),
                                                                mintingStep === "confirming" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2",
                                                                    children: "Confirmation..."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/feature/home/index.tsx",
                                                                    lineNumber: 434,
                                                                    columnNumber: 29
                                                                }, this),
                                                                mintingStep === "success" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2",
                                                                    children: "Success"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/feature/home/index.tsx",
                                                                    lineNumber: 439,
                                                                    columnNumber: 29
                                                                }, this),
                                                                mintingStep === "idle" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "font-medium w-full",
                                                                        children: "MINT"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/feature/home/index.tsx",
                                                                        lineNumber: 445,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                }, void 0, false)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/feature/home/index.tsx",
                                                            lineNumber: 409,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/feature/home/index.tsx",
                                                        lineNumber: 408,
                                                        columnNumber: 23
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "bg-[#858585] w-[60%] justify-center mx-auto flex items-center rounded h-[60px] sm:h-[85px] py-5 text-3xl uppercase text-white transition-all duration-300 ease-in-out mt-3",
                                                        children: "MINTED"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/feature/home/index.tsx",
                                                        lineNumber: 451,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/feature/home/index.tsx",
                                                    lineNumber: 402,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-5 p-4 w-full sm:w-[60%] bg-[#241f6f32] rounded-md",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between items-center mb-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `pb-1 rounded-full flex items-center text-base sm:text-xl`,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: `${isUserWL || isUserFCFS || isUserTeam ? "bg-green-600" : "bg-red-600"} h-4 w-4 mr-3 `
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/feature/home/index.tsx",
                                                                            lineNumber: 463,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        isDisconnected ? "NOT CONNECTED" : isUserTeam ? "ELIGIBLE TEAM" : isUserWL ? "ELIGIBLE WL" : isUserFCFS ? "ELIGIBLE FCFS" : "NOT ELIGIBLE"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/feature/home/index.tsx",
                                                                    lineNumber: 460,
                                                                    columnNumber: 21
                                                                }, this),
                                                                address && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-center",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-base sm:text-xl text-gray-300 uppercase",
                                                                            children: "mints:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/feature/home/index.tsx",
                                                                            lineNumber: 483,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "ml-2 text-base sm:text-xl text-white font-medium",
                                                                            children: [
                                                                                userMints,
                                                                                "/",
                                                                                maxMintsPerAddress
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/feature/home/index.tsx",
                                                                            lineNumber: 486,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/feature/home/index.tsx",
                                                                    lineNumber: 482,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/feature/home/index.tsx",
                                                            lineNumber: 459,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-full h-5 rounded overflow-hidden",
                                                                    style: {
                                                                        boxShadow: "0px 0px 13px 5px rgba(255, 255, 255, 0.05)",
                                                                        background: "rgba(255, 255, 255, 0.1)"
                                                                    },
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "h-full bg-[#2921a3] transition-all duration-500",
                                                                        style: {
                                                                            width: `${totalMinted / (maxSupply || 1000) * 100}%`
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/feature/home/index.tsx",
                                                                        lineNumber: 501,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/feature/home/index.tsx",
                                                                    lineNumber: 494,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between items-center mt-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-base sm:text-lg text-gray-200 uppercase",
                                                                            children: "Total minted"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/feature/home/index.tsx",
                                                                            lineNumber: 511,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-base sm:text-lg font-medium text-white",
                                                                            children: [
                                                                                totalMinted || 0,
                                                                                " / ",
                                                                                maxSupply || 377
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/feature/home/index.tsx",
                                                                            lineNumber: 514,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/feature/home/index.tsx",
                                                                    lineNumber: 510,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "h-0.5 w-full bg-[#7051eb38] my-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/feature/home/index.tsx",
                                                                    lineNumber: 518,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center justify-between",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-white font-medium text-base sm:text-lg mx-auto sm:text-[20px] mb-4 uppercase",
                                                                        children: [
                                                                            "Current phase:",
                                                                            " ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-yellow-500",
                                                                                children: mintPhaseInfo?.currentPhase === "First Come First Served" ? "FCFS" : mintPhaseInfo?.currentPhase === "Team Only" ? "TEAM" : mintPhaseInfo?.currentPhase === "Whitelist" ? "WHITELIST" : "ENDED"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/feature/home/index.tsx",
                                                                                lineNumber: 522,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/feature/home/index.tsx",
                                                                        lineNumber: 520,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/feature/home/index.tsx",
                                                                    lineNumber: 519,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/feature/home/index.tsx",
                                                            lineNumber: 493,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/feature/home/index.tsx",
                                                    lineNumber: 458,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/feature/home/index.tsx",
                                            lineNumber: 380,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UserNFTs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserNFTs"], {}, void 0, false, {
                                            fileName: "[project]/src/feature/home/index.tsx",
                                            lineNumber: 544,
                                            columnNumber: 15
                                        }, this),
                                        " "
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/feature/home/index.tsx",
                                    lineNumber: 379,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/feature/home/index.tsx",
                            lineNumber: 362,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/feature/home/index.tsx",
                        lineNumber: 361,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/feature/home/index.tsx",
                lineNumber: 359,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AudioPlayer, {}, void 0, false, {
                fileName: "[project]/src/feature/home/index.tsx",
                lineNumber: 549,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),

};

//# sourceMappingURL=src_a28b4c._.js.map