import{J as _,W as a,X as d,j as s,y as c,I as t,x as e,Y as n,U as u}from"./index-e5441cab.js";import"./react-478711a0.js";import{u as m}from"./useZkpContext-884ccc39.js";import"./lodash-de833af9.js";import"./iden3JsJwz-c3283528.js";import"./nearApiJs-b2772378.js";const h=()=>{const{provider:r}=_(),{verificationSuccessTx:i}=m(),l={[a.KYCAgeCredential]:{label:`Proof of Age: older than ${new Date().getFullYear()-new Date(String(d[a.KYCAgeCredential])).getFullYear()}`}};return s.jsxs("div",{className:"auth-success",children:[s.jsxs("div",{className:"auth-success__header",children:[s.jsx("div",{className:"auth-success__header-icon-wrp",children:s.jsx(c,{className:"auth-success__header-icon",name:t.check})}),s.jsx("h2",{className:"auth-success__header-title",children:"Proof Submitted"})]}),s.jsxs("div",{className:"auth-success__card",children:[s.jsx("span",{className:"auth-success__card-title",children:"Check transaction"}),s.jsx("a",{className:"auth-success__copy-field-wrp",href:r?.getTxUrl?.(e.SUPPORTED_CHAINS_DETAILS[e.DEFAULT_CHAIN],i.get),target:"_blank",rel:"noreferrer",children:s.jsxs("span",{className:"auth-success__copy-field",children:[n(i.get,10),s.jsx(c,{className:"auth-success__copy-field-icon",name:t.externalLink})]})})]}),s.jsxs("div",{className:"auth-success__minted-nft",children:[s.jsx("span",{className:"auth-success__minted-nft-title",children:"You’ve received the SBT "}),s.jsxs("div",{className:"auth-success__minted-nft-card",children:[s.jsx("div",{className:"auth-success__minted-nft-card-img-wrp",children:s.jsx("img",{src:"/images/minted-sbt-stub.png",alt:"",className:"auth-success__minted-nft-card-img"})}),s.jsxs("div",{className:"auth-success__minted-nft-card-details",children:[s.jsx("span",{className:"auth-success__minted-nft-card-title",children:"PolygonID × Rarimo"}),e?.[`VERIFIED_SBT_CONTRACT_ADDRESS_${e.DEFAULT_CHAIN}`]?s.jsx("span",{className:"auth-success__minted-nft-card-subtitle",children:s.jsx("a",{href:r?.getAddressUrl?.(e.SUPPORTED_CHAINS_DETAILS[e.DEFAULT_CHAIN],e[`VERIFIED_SBT_CONTRACT_ADDRESS_${e.DEFAULT_CHAIN}`]??""),target:"_blank",rel:"noreferrer",children:n(e[`VERIFIED_SBT_CONTRACT_ADDRESS_${e.DEFAULT_CHAIN}`]??"")})}):s.jsx(s.Fragment,{})]})]})]}),s.jsx("div",{className:"auth-success__card",children:s.jsx("div",{className:"auth-success__metadata",children:s.jsxs("div",{className:"auth-success__metadata-item",children:[s.jsx("span",{className:"auth-success__metadata-item-label",children:l[a.KYCAgeCredential].label}),s.jsx("div",{className:"auth-success__metadata-item-value",children:s.jsx(c,{className:"auth-success__metadata-item-value-icon",name:t.checkCircle})})]})})}),s.jsx(u,{className:"auth-success__return-btn",routePath:"/",text:"RETURN HOME",size:"large"})]})},p=h;export{p as default};
//# sourceMappingURL=index-3086e9bd.js.map
