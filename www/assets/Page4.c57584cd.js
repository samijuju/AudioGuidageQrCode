import { u as useRouter, o as openBlock, c as createElementBlock, a as createBaseVNode, b as unref, F as Fragment } from "./index.05847a04.js";
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", null, "Page 4", -1);
const _sfc_main = {
  __name: "Page4",
  setup(__props) {
    const router = useRouter();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        _hoisted_1,
        createBaseVNode("button", {
          onClick: _cache[0] || (_cache[0] = ($event) => unref(router).push("/"))
        }, "Retour")
      ], 64);
    };
  }
};
export {
  _sfc_main as default
};
