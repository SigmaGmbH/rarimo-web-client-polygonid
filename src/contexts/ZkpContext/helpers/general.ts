import { v4 as uuidv4 } from 'uuid'

import { api } from '@/api'
import { CLAIM_TYPES_MAP } from '@/contexts/ZkpContext/consts'
import { ClaimTypes } from '@/contexts/ZkpContext/enums'

export const createRequestOffChain = (
  reason: string,
  message: string,
  sender: string,
  callbackUrl: string,
) => {
  const uuid = uuidv4()

  return {
    id: uuid,
    thid: uuid,
    from: sender,
    typ: 'application/iden3comm-plain-json',
    type: 'https://iden3-communication.io/authorization/1.0/request',
    body: {
      reason: reason,
      // message: message,
      callbackUrl: callbackUrl,
      scope: [],
    },
  }
}

export const buildRequestOffChain = async (
  callbackBaseUrl: string,
  claimType: ClaimTypes,
) => {
  const { data } = await api.get<{
    verification_id: string
    jwt: string
  }>('/integrations/verify-proxy/v1/public/verify/request')

  const request = createRequestOffChain(
    'SBT airdrop', // FIXME
    '', // FIXME
    'did:polygonid:polygon:mumbai:2qDpUjL74PwJxkLg1cDhFzCEx8887CNHC3GD91EGny', // FIXME
    `${callbackBaseUrl}/integrations/verify-proxy/v1/public/verify/callback/${data.verification_id}`,
  )

  return {
    request: {
      ...request,
      id: data.verification_id,
      thid: data.verification_id,
      body: {
        ...request.body,
        scope: [CLAIM_TYPES_MAP[claimType]],
      },
    },
    jwtToken: data.jwt,
  }
}

export const getJWZOffChain = async (
  jwtToken: string,
  verificationId: string,
) => {
  const { data } = await api.get<{
    jwz: string
  }>(`/integrations/verify-proxy/v1/public/verify/response/${verificationId}`, {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  })

  return data.jwz
}