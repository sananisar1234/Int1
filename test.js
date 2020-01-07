import http from "k6/http";
import { check } from "k6";

let url, opts, r;

export let options = {
  stages: [{ target: 10, duration: "1s" }]
};

export default function(data) {
  if (__VU >= 1 && __VU <= 10) {
    if (__ITER < 1) {
      url = "http://opensource-demo.orangehrmlive.com";
      opts = {
        redirects: 999
      };
      r = http.request(
        "GET",
        url,
        {
          ["txtUsername"]: "admin",
          ["txtPassword"]: "admin123",
          ["btnLogin"]: "Submit"
        },
        opts
      );
    }
  }
}
