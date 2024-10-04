import { resolveComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "node:http";
import "node:https";
import "node:zlib";
import "node:stream";
import "node:buffer";
import "node:util";
import "node:url";
import "node:net";
import "node:fs";
import "node:path";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "vue-router";
import "radix3";
const _sfc_main = {
  name: "HttpStatusCodes",
  data() {
    return {
      statusCategories: [
        {
          title: "1xx Informational Response",
          codes: [
            { code: "100", message: "Continue: Waiting for the client to emit the body of the request." },
            { code: "101", message: "Switching Protocols: The server has agreed to change protocol." },
            { code: "102", message: "Processing: The server is processing the request, but no response is available yet." },
            { code: "103", message: "Early Hints: The server returns some response headers before final HTTP message." }
          ]
        },
        {
          title: "2xx Success",
          codes: [
            { code: "200", message: "OK: Standard response for successful HTTP requests." },
            { code: "201", message: "Created: The request has been fulfilled, resulting in the creation of a new resource." },
            { code: "202", message: "Accepted: The request has been accepted for processing, but the processing has not been completed." },
            { code: "203", message: "Non-Authoritative Information: The request is successful but the content has been modified." },
            { code: "204", message: "No Content: The server successfully processed the request and is not returning any content." },
            { code: "205", message: "Reset Content: The server indicates to reinitialize the document view." },
            { code: "206", message: "Partial Content: The server is delivering only part of the resource." },
            { code: "207", message: "Multi-Status: The message body that follows is an XML message with multiple response codes." },
            { code: "208", message: "Already Reported: Members of a DAV binding have already been enumerated." },
            { code: "226", message: "IM Used: The server has fulfilled a request for the resource." }
          ]
        },
        {
          title: "3xx Redirection",
          codes: [
            { code: "300", message: "Multiple Choices: Indicates multiple options for the resource." },
            { code: "301", message: "Moved Permanently: Future requests should be directed to the given URI." },
            { code: "302", message: "Found: Redirect to another URL." },
            { code: "303", message: "See Other: The response can be found under another URI." },
            { code: "304", message: "Not Modified: The resource has not been modified." },
            { code: "305", message: "Use Proxy: The resource is only available through a proxy." },
            { code: "306", message: "Switch Proxy: No longer used." },
            { code: "307", message: "Temporary Redirect: The request should be repeated with another URI." },
            { code: "308", message: "Permanent Redirect: Future requests should be repeated using another URI." }
          ]
        },
        {
          title: "4xx Client Error",
          codes: [
            { code: "400", message: "Bad Request: The server cannot or will not process the request due to a client error." },
            { code: "401", message: "Unauthorized: Authentication is required and has failed." },
            { code: "402", message: "Payment Required: Reserved for future use." },
            { code: "403", message: "Forbidden: The request was valid, but the server is refusing action." },
            { code: "404", message: "Not Found: The requested resource could not be found." },
            { code: "405", message: "Method Not Allowed: A request method is not supported for the requested resource." },
            { code: "406", message: "Not Acceptable: The requested resource is not acceptable." },
            { code: "407", message: "Proxy Authentication Required: The client must authenticate with the proxy." },
            { code: "408", message: "Request Timeout: The server timed out waiting for the request." },
            { code: "409", message: "Conflict: The request could not be processed due to a conflict." },
            { code: "410", message: "Gone: The resource is no longer available." },
            { code: "411", message: "Length Required: The request did not specify the length of its content." },
            { code: "412", message: "Precondition Failed: The server does not meet the preconditions." },
            { code: "413", message: "Payload Too Large: The request is larger than the server can process." },
            { code: "414", message: "URI Too Long: The URI provided was too long." },
            { code: "415", message: "Unsupported Media Type: The request entity has a media type which is not supported." },
            { code: "416", message: "Range Not Satisfiable: The client has asked for a portion of the file." },
            { code: "417", message: "Expectation Failed: The server cannot meet the requirements of the Expect request-header." },
            { code: "418", message: "I'm a teapot: The server refuses the attempt to brew coffee." },
            { code: "421", message: "Misdirected Request: The request was directed at a server that cannot produce a response." },
            { code: "422", message: "Unprocessable Entity: The request was well-formed but unable to be followed." },
            { code: "423", message: "Locked: The resource that is being accessed is locked." },
            { code: "424", message: "Failed Dependency: The request failed due to failure of a previous request." },
            { code: "425", message: "Too Early: The server is unwilling to risk processing a request that might be replayed." },
            { code: "426", message: "Upgrade Required: The client should switch to a different protocol." },
            { code: "428", message: "Precondition Required: The origin server requires the request to be conditional." },
            { code: "429", message: "Too Many Requests: The user has sent too many requests." },
            { code: "431", message: "Request Header Fields Too Large: The server is unwilling to process the request." },
            { code: "451", message: "Unavailable For Legal Reasons: A legal demand has been received to deny access." }
          ]
        },
        {
          title: "5xx Server Error",
          codes: [
            { code: "500", message: "Internal Server Error: A generic error message." },
            { code: "501", message: "Not Implemented: The server does not recognize the request method." },
            { code: "502", message: "Bad Gateway: The server received an invalid response from the upstream server." },
            { code: "503", message: "Service Unavailable: The server is currently unavailable." },
            { code: "504", message: "Gateway Timeout: The server did not receive a timely response." },
            { code: "505", message: "HTTP Version Not Supported: The server does not support the HTTP protocol version." },
            { code: "506", message: "Variant Also Negotiates: Transparent content negotiation resulted in a circular reference." },
            { code: "507", message: "Insufficient Storage: The server is unable to store the representation." },
            { code: "508", message: "Loop Detected: The server detected an infinite loop." },
            { code: "510", message: "Not Extended: Further extensions to the request are required." },
            { code: "511", message: "Network Authentication Required: A network authentication is required." }
          ]
        }
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))} data-v-36747597><div class="margins" data-v-36747597><div class="header" data-v-36747597><h1 class="heading" data-v-36747597>HTTP Status Codes</h1><div class="flex justify-end mt-4" data-v-36747597>`);
  _push(ssrRenderComponent(_component_router_link, {
    to: "/",
    class: "action-button"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home`);
      } else {
        return [
          createTextVNode("Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="toolkit" data-v-36747597><!--[-->`);
  ssrRenderList($data.statusCategories, (category) => {
    _push(`<div class="tool" data-v-36747597><h2 class="tool-title text-gray-300" data-v-36747597>${ssrInterpolate(category.title)}</h2><ul class="list-disc pl-5" data-v-36747597><!--[-->`);
    ssrRenderList(category.codes, (status) => {
      _push(`<li class="tool-description mb-1" data-v-36747597><strong class="gradient__text" data-v-36747597>${ssrInterpolate(status.code)}</strong>: ${ssrInterpolate(status.message)}</li>`);
    });
    _push(`<!--]--></ul></div>`);
  });
  _push(`<!--]--></div></div><footer class="margins footer" data-v-36747597><div class="social" data-v-36747597><a href="https://x.com/ilostmyipad" rel="noopener noreferrer" target="_blank" class="hover-underline-animation" data-v-36747597><span class="gradient__text" data-v-36747597>@iLostmyipad</span></a></div></footer></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/StatusCodes.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const StatusCodes = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-36747597"]]);
export {
  StatusCodes as default
};
//# sourceMappingURL=StatusCodes-C50ZwMeE.js.map
