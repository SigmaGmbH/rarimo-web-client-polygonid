import { ClaimTypes } from '@/contexts/ZkpContext/enums'

export const CLAIM_TYPES_CHECKS_VALUES_MAP: Record<ClaimTypes, unknown> = {
  [ClaimTypes.AnimaProofOfIdentity]: true
}

export const CLAIM_TYPES_MAP_ON_CHAIN: Record<ClaimTypes, unknown> = {
  [ClaimTypes.AnimaProofOfIdentity]: {
    id: 1,
    circuitId: 'credentialAtomicQueryMTPV2OnChain',
    query: {
      allowedIssuers: ['*'],
      context:
        'https://raw.githubusercontent.com/anima-protocol/claims-polygonid/main/schemas/json-ld/poi-v1.json-ld',
      credentialSubject: {
        kyc_validated: {
          $eq: CLAIM_TYPES_CHECKS_VALUES_MAP[ClaimTypes.AnimaProofOfIdentity],
        },
      },
      type: ClaimTypes.AnimaProofOfIdentity,
    },
  },
}
