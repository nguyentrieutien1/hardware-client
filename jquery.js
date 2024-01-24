setTimeout(() => {
    const humberger__open = document.querySelector(".humberger__open")
    const humberger__menu__wrapper = document.querySelector(".humberger__menu__wrapper")
    const humberger__menu__overlay = document.querySelector(".humberger__menu__overlay")
    const body = document.querySelector("body")

    humberger__open?.addEventListener("click", () => {
        console.log(123);
        humberger__menu__wrapper?.classList?.add("show__humberger__menu__wrapper")
        humberger__menu__overlay?.classList?.add("active")
        body?.classList?.add("over_hid")
    })

    humberger__menu__overlay?.addEventListener("click", () => {
        humberger__menu__wrapper?.classList?.remove("show__humberger__menu__wrapper")
        humberger__menu__overlay?.classList?.remove("active")
        body?.classList?.remove("over_hid")
    })
}, 1000);