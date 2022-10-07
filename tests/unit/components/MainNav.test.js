import { mount } from "@vue/test-utils";
import MainNav from "@/components/MainNav.vue";

describe("ManNav", () => {
  it("displays company name", () => {
    const wrapper = mount(MainNav);
    expect(wrapper.text()).toMatch("J-Board");
  });
});
