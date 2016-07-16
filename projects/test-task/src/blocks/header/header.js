// HEADER
(function(n) {
    function t(t) {
        var f = n(this),
            r = null,
            u = [],
            e = null,
            o = null,
            i = n.extend({
                rowSelector: "> li",
                submenuSelector: "*",
                submenuDirection: "right",
                toleranceUp: 75,
                toleranceDown: 75,
                enter: n.noop,
                exit: n.noop,
                activate: n.noop,
                deactivate: n.noop,
                exitMenu: n.noop
            }, t),
            c = 3,
            l = 300,
            a = function(n) {
                u.push({
                    x: n.pageX,
                    y: n.pageY
                });
                u.length > c && u.shift()
            },
            v = function() {
                o && clearTimeout(o);
                i.exitMenu(this) && (r && i.deactivate(r), r = null)
            },
            y = function() {
                o && clearTimeout(o);
                i.enter(this);
                h(this)
            },
            p = function() {
                i.exit(this)
            },
            w = function() {
                s(this)
            },
            s = function(n) {
                n != r && (r && i.deactivate(r), i.activate(n), r = n)
            },
            h = function(n) {
                var t = b();
                t ? o = setTimeout(function() {
                    h(n)
                }, t) : s(n)
            },
            b = function() {
                function v(n, t) {
                    return (t.y - n.y) / (t.x - n.x)
                }
                var h, c;
                if (!r || !n(r).is(i.submenuSelector)) return 0;
                var t = f.offset(),
                    y = {
                        x: t.left,
                        y: t.top - i.toleranceUp
                    },
                    w = {
                        x: t.left + f.outerWidth(),
                        y: y.y - i.toleranceUp
                    },
                    p = {
                        x: t.left,
                        y: t.top + f.outerHeight() + i.toleranceDown
                    },
                    a = {
                        x: t.left + f.outerWidth(),
                        y: p.y + i.toleranceDown
                    },
                    s = u[u.length - 1],
                    o = u[0];
                if (!s || (o || (o = s), o.x < t.left || o.x > a.x || o.y < t.top || o.y > a.y) || e && s.x == e.x && s.y == e.y) return 0;
                h = w;
                c = a;
                i.submenuDirection == "left" ? (h = p, c = y) : i.submenuDirection == "below" ? (h = a, c = p) : i.submenuDirection == "above" && (h = y, c = w);
                var b = v(s, h),
                    k = v(s, c),
                    d = v(o, h),
                    g = v(o, c);
                return b < d && k > g ? (e = s, l) : (e = null, 0)
            };
        f.mouseleave(v).find(i.rowSelector).mouseenter(y).mouseleave(p).click(w);
        n(document).mousemove(a)
    }
    n.fn.menuAim = function(n) {
        return this.each(function() {
            t.call(this, n)
        }), this
    }
})(jQuery);

"use strict";
(function(n) {
    function t() {
        var t = this,
            o, s;
        t.shellUserDropdown = null;
        t.shellFooterDropdown = null;
        t.shellNavDropdown = null;
        t.shellNavTab = null;
        t.shellToggle = null;
        t.shellHeader = document.getElementById("shell-header");
        t.responsiveEnabled = n(".shell-responsive").length;
        t.breakpoint = 899;
        t.meControlMobileBreakpoint = 540;
        t.resizeTimeout = null;
        o = n(".shell-header-nav-toggle");
        s = n(".fixed-global-nav-buffer");
        t.resizeThrottler = function() {
            t.resizeTimeout || (t.resizeTimeout = setTimeout(function() {
                t.resizeTimeout = null;
                t.resizeHandler()
            }, 250))
        };
        t.resizeHandler = function() {
            window.msCommonShellIE8 || t.shellToggle.closeNav();
            t.shellFooterDropdown.handleFooterResize();
            t.shellNavDropdown.handleMobileDesktopViewSwitch();
            s.height(t.shellHeader.offsetHeight);
            t.shellToggle.handleSearchResize()
        };
        t.matchesSmall = function() {
            return o.is(":visible") ? !0 : t.responsiveEnabled ? !window.msCommonShellIE8 && window.matchMedia ? window.matchMedia("(max-width: " + t.breakpoint + "px)").matches : n(window).width() < t.breakpoint : !1
        };
        t.matchesLarge = function() {
            return o.is(":visible") ? !1 : t.responsiveEnabled ? !window.msCommonShellIE8 && window.matchMedia ? window.matchMedia("(min-width: " + t.breakpoint + "px)").matches : n(window).width() >= t.breakpoint : !0
        };
        t.matchesOverMeControlMobile = function() {
            return t.responsiveEnabled ? !window.msCommonShellIE8 && window.matchMedia ? window.matchMedia("(min-width: " + t.meControlMobileBreakpoint + "px)").matches : n(window).width() >= t.meControlMobileBreakpoint : !0
        };
        t.init = function() {
            n(".shell-category-header").length || n(t.shellHeader).addClass("global-sticky");
            t.shellUserDropdown = new r(t);
            t.shellFooterDropdown = new i(t);
            t.shellNavDropdown = new u(t);
            t.shellNavTab = new f(t);
            t.shellToggle = new e(t);
            n(".shell-header-dropdown-content").menuAim({
                rowSelector: "> dl",
                activate: t.shellNavTab.display,
                toleranceUp: 500,
                toleranceDown: 300,
                exitMenu: function() {
                    return !0
                }
            });
            n(window).resize(t.resizeThrottler);
            t.resizeHandler()
        };
        t.init()
    }

    function i(t) {
        var i = this,
            u = n(".grp-title"),
            r;
        i.shellUI = t;
        i.isMobileView = function() {
            return i.shellUI.matchesSmall() && !i.shellUI.matchesOverMeControlMobile()
        };
        i.toggleFooterDropDown = function(t) {
            if (i.isMobileView()) {
                i.toggle(t.target);
                var r = n(t.target).attr("aria-expanded") === "true";
                n(t.target).attr("aria-expanded", !r)
            }
        };
        i.setAccessibleAttributes = function() {
            u.attr("aria-expanded", !1).attr("role", "button").attr("tabindex", 0)
        };
        i.toggle = function(t) {
            n(t).siblings("ul").slideToggle(200)
        };
        i.init = function() {
            i.isMobileView() && (i.setAccessibleAttributes(), r = !0);
            u.on("click.shellFooterDropdown", i.toggleFooterDropDown).on("keydown", function(n) {
                n.which == 13 && i.toggleFooterDropDown(n)
            })
        };
        i.handleFooterResize = function() {
            i.shellUI.matchesOverMeControlMobile() && u.siblings("ul").css("display", "");
            i.isMobileView() && !r ? (i.setAccessibleAttributes(), r = !0) : !i.isMobileView() && r && (u.removeAttr("aria-expanded role tabindex"), r = !1)
        };
        i.init()
    }

    function r(t) {
        var i = this;
        i.shellUI = t;
        i.open = function() {
            n(".shell-header-user").addClass("active")
        };
        i.close = function() {
            n(".shell-header-user").removeClass("active")
        };
        i.toggle = function(t) {
            n(t).closest(".shell-header-user").toggleClass("active")
        };
        i.init = function() {
            n(".shell-header-user-label a").on("click.shellUserDropdown", function() {
                return i.toggle(this), !1
            });
            n(document).on("click.shellUserDropdownOutside", function(t) {
                n(t.target).closest(".shell-header-user").length || i.close()
            });
            n(document).on("keyup.shellUserDropdownOutside", function(n) {
                n.keyCode == 27 && i.close()
            })
        };
        i.init()
    }

    function u(t) {
        var i = this,
            u = n(".shell-header"),
            e = n(".shell-header-dropdown"),
            h = n(".shell-header-dropdown-tab"),
            o = n(".shell-header-dropdown-content"),
            c = n(".shell-header-dropdown-tab-content"),
            s = n(".shell-header-nav-wrapper"),
            l = n(".shell-header-nav-toggle"),
            f = n(document.getElementById("meControl")),
            v = n(".shell-header-user dt"),
            y = n(".shell-header-user-mobile-container"),
            p = n(".c-nav-pagination"),
            a = 40,
            r = 200;
        i.shellUI = t;
        i.open = function(t) {
            var f;
            if (t.addClass("active"), f = t.find(".shell-header-dropdown-content"), i.shellUI.matchesLarge())
                if (t.hasClass("horizontalLayout")) {
                    var o = t.data("navcontainer"),
                        e = n("#" + o),
                        s = e.siblings(".shell-header-HL2");
                    e.hasClass("active") || (s.removeClass("active"), e.addClass("active"))
                } else u.hasClass("mobile-view") || f.slideDown(r).promise().done(function() {
                    i.offset(t);
                    f.css("overflow", "")
                });
            else f.slideDown(r, function() {
                f.css("overflow", "")
            })
        };
        i.offset = function(t) {
            var f = t.closest(".shell-header-wrapper"),
                r = t.find(".shell-header-dropdown-content"),
                s = "left",
                i = 0,
                u = 0,
                e, o;
            n("body").css("direction") === "rtl" ? (s = "right", i = t.offset().left + t.outerWidth() - (f.offset().left + r.outerWidth()), e = t.offset().left + t.outerWidth() - i, u = n("body").width() - e - (e - r.outerWidth())) : (i = f.offset().left + f.outerWidth() - (t.offset().left + r.outerWidth()), o = t.offset().left + i, u = o - (n("body").width() - o - r.outerWidth()));
            u < 0 && (i -= u / 2);
            r.css(s, i < 0 ? i : "")
        };
        i.adjustMenuPaneSize = function(t, i) {
            if (this.shellUI.matchesSmall()) n(i[0]).attr("style", "");
            else {
                i.height("auto");
                var r = t.children(".shell-header-dropdown-tab-content");
                r && (r.height() > i.height() ? i.height(r.height() - a) : r.height(i.height() + 8))
            }
        };
        i.handleMobileDesktopViewSwitch = function() {
            i.shellUI.matchesLarge() ? u.hasClass("mobile-view") && (u.removeClass("mobile-view"), e.removeClass("active"), h.removeClass("active"), o.removeAttr("style"), c.removeAttr("style"), s.removeClass("opened"), s.removeAttr("style"), l.removeClass("opened"), n("html").css("overflow", "auto")) : (u.hasClass("mobile-view") || (u.addClass("mobile-view"), e.removeClass("active"), h.removeClass("active"), o.removeAttr("style"), c.removeAttr("style")), p.hide());
            i.shellUI.matchesOverMeControlMobile() ? v.find("#meControl").length || (f.detach(), v.append(f), window.MSA && window.MSA.MeControl && (i.shellUI.matchesLarge() ? window.MSA.MeControl.API.setMobileState(0) : window.MSA.MeControl.API.setMobileState(1))) : y.find("#meControl").length || (f.detach(), y.append(f), window.MSA && window.MSA.MeControl && window.MSA.MeControl.API.setMobileState(2), e.length || f.length || l.css("display", "none"))
        };
        i.closed = function() {
            i.shellUI.matchesLarge() && n(".shell-header-dropdown-content").height("auto")
        };
        i.close = function(n) {
            n.removeClass("active");
            n.find(".shell-header-dropdown-content").slideUp(r, i.closed);
            n.find(".shell-header-dropdown-tab").removeClass("active")
        };
        i.closeAll = function() {
            var u = n(document.activeElement).closest(".shell-header-dropdown"),
                t;
            n(".shell-header-dropdown").removeClass("active");
            o.slideUp(r, i.closed);
            h.removeClass("active");
            i.shellUI.matchesSmall() && (e.removeClass("active"), o.removeAttr("style"), c.removeAttr("style"), s.removeClass("opened"), s.hide(), l.removeClass("opened"), n("html").css("overflow", "auto"));
            t = n(".shell-header-dropdown");
            i.CloseAriaAttributes(t.find(".shell-header-dropdown-label > a[aria-expanded]"), "aria-expanded");
            i.CloseAriaAttributes(t.find(".shell-header-dropdown-content"), "aria-hidden");
            u.length && u.find(".shell-header-dropdown-label").find("a").first().focus()
        };
        i.toggleAriaAttributes = function(n, t) {
            n && n.length && (n.attr(t) === "false" ? n.attr(t, "true") : n.attr(t, "false"))
        };
        i.CloseAriaAttributes = function(n, t) {
            n && n.length && (t === "aria-expanded" ? n.attr(t, "false") : n.attr(t, "true"))
        };
        i.toggle = function(t) {
            var u = n(t).closest(".shell-header-dropdown"),
                f = u.siblings(".shell-header-dropdown"),
                e, o;
            u.length && (u.hasClass("active") ? i.close(u) : (f.removeClass("active"), f.find(".shell-header-dropdown-content").slideUp(r, i.closed), i.open(u)));
            e = u.find(".shell-header-dropdown-label > a[aria-expanded]");
            o = u.find(".shell-header-dropdown-content");
            i.toggleAriaAttributes(e, "aria-expanded");
            i.toggleAriaAttributes(o, "aria-hidden")
        };
        i.SelectUp = function() {
            var r = n(document.activeElement),
                e = !1,
                u, c, o, t, s, f, h, l;
            return r.hasClass("shell-l3-list-item") ? (u = r.parent(), c = u.prev(), c.length && (t = u.prev().find("a").first(), t.length ? (u.removeClass("shell-header-dropdown-tab-list-active"), t.focus(), u.prev().addClass("shell-header-dropdown-tab-list-active")) : (o = u.closest(".shell-l3-group"), o.length && (t = o.prev().find("a").last(), t.length && (u.removeClass("shell-header-dropdown-tab-list-active"), t.focus(), t.parent().addClass("shell-header-dropdown-tab-list-active"))))), e = !0) : r.closest(".shell-header-dropdown-tab").length && (s = r.parent().parent(), f = s.prev(), f.length == 0 && (i.close(r.closest(".shell-header-dropdown")), h = r.closest(".shell-header-dropdown"), i.CloseAriaAttributes(h.find(".shell-header-dropdown-label > a[aria-expanded]"), "aria-expanded"), i.CloseAriaAttributes(h.find(".shell-header-dropdown-content"), "aria-hidden")), s.removeClass("active"), f.length ? (f.addClass("active"), f.find("a").first().focus()) : (l = r.closest(".shell-header-dropdown"), l.find(".shell-header-dropdown-label").find("a").first().focus()), e = !0), e
        };
        i.SelectUpMobile = function() {
            var t = n(document.activeElement),
                u = !1,
                f, r, e;
            return t.parent().hasClass("shell-header-dropdown-label") ? (f = t.closest(".shell-header-dropdown").prev(), f.length && !f.hasClass("shell-header-user-mobile-container") ? f.find("a").first().focus() : (i.shellUI.shellToggle.toggleHeaderNav(), n(".shell-header-toggle-menu").focus()), u = !0) : t.parent().hasClass("shell-header-dropdown-tab-label") ? (t.closest(".shell-header-dropdown-tab-label").removeClass("shell-header-dropdown-tab-label-mobile-focus"), r = t.closest(".shell-header-dropdown-tab").prev(), r.length ? (r.find("a").first().focus(), r.find(".shell-header-dropdown-tab-label").addClass("shell-header-dropdown-tab-label-mobile-focus")) : (i.shellUI.shellNavDropdown.close(t.closest(".shell-header-dropdown")), t.closest(".shell-header-dropdown").find("a").first().focus()), u = !0) : t.hasClass("shell-l3-list-item") && (r = t.parent().prev().find("a").first().focus(), r.length == 0 && (e = t.closest(".shell-header-dropdown-tab"), i.shellUI.shellNavTab.toggle(e.find("a").first()), e.find("a").first().focus()), u = !0), u
        };
        i.SelectDown = function() {
            var t = n(document.activeElement),
                e = !1,
                u, c, f, o, l, s, a, h;
            return t.parent().hasClass("shell-header-dropdown-label") ? (u = t.closest(".shell-header-dropdown"), c = u.siblings(".shell-header-dropdown"), u.length && (c.removeClass("active"), c.find(".shell-header-dropdown-content").slideUp(r, i.closed), i.open(u), setTimeout(function() {
                t.parents("li").find(".shell-header-dropdown-tab").find("a").first().focus()
            }, 300), e = !0, i.toggleAriaAttributes(u.find(".shell-header-dropdown-label > a[aria-expanded]"), "aria-expanded"), i.toggleAriaAttributes(u.find(".shell-header-dropdown-content"), "aria-hidden"))) : t.hasClass("shell-l3-list-item") ? (f = t.parent(), o = f.next(), o.length ? (f.removeClass("shell-header-dropdown-tab-list-active"), o.find("a").first().focus(), o.addClass("shell-header-dropdown-tab-list-active")) : (l = f.closest(".shell-l3-group"), l.length && (s = l.next().find("a").first(), s.length && (f.removeClass("shell-header-dropdown-tab-list-active"), s.focus(), s.parent().addClass("shell-header-dropdown-tab-list-active")))), e = !0) : t.closest(".shell-header-dropdown-tab").length && (a = t.parent().parent(), h = a.next(), h.length && (a.removeClass("active"), h.addClass("active"), h.find("a").first().focus()), e = !0), e
        };
        i.SelectDownMobile = function() {
            var t = n(document.activeElement),
                f = !1,
                u, r, e, o;
            return t.hasClass("shell-header-toggle-menu") ? (t.parent().hasClass("opened") ? t.closest(".shell-header-top").find(".shell-header-dropdown-label").first().find("a").first().focus() : (i.shellUI.shellToggle.toggleHeaderNav(), n(".shell-header-nav-wrapper").hasClass("opened") && n("#srv_shellHeaderNav").find(".shell-header-dropdown").first().find("a").first().focus()), f = !0) : t.parent().hasClass("shell-header-dropdown-label") ? (r = t.closest(".shell-header-dropdown"), r.hasClass("active") ? r.find(".shell-header-dropdown-tab-label").first().find("a").focus().addClass("shell-header-dropdown-tab-label-mobile-focus") : t.closest(".shell-header-dropdown").next().find("a").first().focus(), f = !0) : t.parent().hasClass("shell-header-dropdown-tab-label") ? (r = t.closest(".shell-header-dropdown-tab"), r.hasClass("active") ? r.find(".shell-l3-list-item").first().focus() : (n(".shell-header-dropdown-tab-label-mobile-focus").removeClass("shell-header-dropdown-tab-label-mobile-focus"), u = t.closest(".shell-header-dropdown-tab").next(), u.length ? (u.find("a").first().focus(), u.find(".shell-header-dropdown-tab-label").addClass("shell-header-dropdown-tab-label-mobile-focus")) : (u = t.closest(".shell-header-dropdown").next().find("a").first().focus(), u.length && i.shellUI.shellNavDropdown.close(t.closest(".shell-header-dropdown")))), f = !0) : t.hasClass("shell-l3-list-item") && (u = t.parent().next().find("a").first().focus(), u.length == 0 && (r = t.closest(".shell-header-dropdown-tab"), e = r.next(), e.length && (i.shellUI.shellNavTab.toggle(r.find("a").first()), o = e.find("a").first().focus(), n(".shell-header-dropdown-tab-label-mobile-focus").removeClass("shell-header-dropdown-tab-label-mobile-focus"), o.parent().addClass("shell-header-dropdown-tab-label-mobile-focus"))), f = !0), f
        };
        i.SelectRight = function() {
            var t = n(document.activeElement),
                u = !1,
                r, f, i;
            return t.parent().hasClass("shell-header-dropdown-tab-label") ? (r = t.parent().parent(), f = r.find("li a").first(), f.focus(), r.find(".shell-l3-group").length == 0 ? r.find("li").first().addClass("shell-header-dropdown-tab-list-active") : f.parent().addClass("shell-header-dropdown-tab-list-active"), u = !0) : t.parent().hasClass("shell-header-dropdown-label") && (i = t.closest(".shell-header-dropdown").next(), i.length ? i.hasClass("shell-header-dropdown-label") ? i.find("a").first().focus() : i.find(".shell-header-dropdown-label").find("a").first().focus() : t.closest(".shell-header-dropdown-label").next().find("a").first().focus(), u = !0), u
        };
        i.SelectLeft = function() {
            var t = n(document.activeElement),
                r = !1,
                u, f, i;
            return t.parent().hasClass("shell-header-dropdown-tab-list-active") ? (u = t.parent(), f = u.closest(".shell-header-dropdown-tab"), u.removeClass("shell-header-dropdown-tab-list-active"), f.addClass("active"), f.find("a").first().focus(), r = !0) : t.parent().hasClass("shell-header-dropdown-label") && (i = t.closest(".shell-header-dropdown").prev(), i.length ? i.hasClass("shell-header-dropdown-label") ? i.find("a").first().focus() : i.find(".shell-header-dropdown-label").find("a").first().focus() : t.closest(".shell-header-dropdown-label").prev().find("a").first().focus(), r = !0), r
        };
        i.init = function() {
            n(".shell-header-dropdown-label a:not(.shell-header-direct-link)").click(function() {
                i.toggle(this)
            });
            n(document).on("click.shellNavDropdownOutside", function(t) {
                n(t.target).closest(".shell-header-nav").length || n(t.target).closest(".shell-header-nav-toggle").length || i.closeAll()
            });
            n(document).on("keyup.shellNavDropdownOutside", function(n) {
                n.keyCode == 27 && i.closeAll()
            });
            n(document).on("keydown.shellNavDropdownOutside", function(t) {
                var r = n(".shell-header").hasClass("mobile-view"),
                    u;
                return t.keyCode == 40 ? r ? !i.SelectDownMobile() : !i.SelectDown() : t.keyCode == 38 ? r ? !i.SelectUpMobile() : !i.SelectUp() : (u = n("body").css("direction") === "rtl", t.keyCode == 39) ? u ? r ? !0 : !i.SelectLeft() : r ? !0 : !i.SelectRight() : t.keyCode == 37 ? u ? r ? !0 : !i.SelectRight() : r ? !0 : !i.SelectLeft() : void 0
            });
            var t = n.fn.jquery.split(".");
            a = parseInt(t[0]) < 2 && parseInt(t[1]) <= 7 ? 0 : 8
        };
        i.init()
    }

    function f(t) {
        var i = this;
        i.shellUI = t;
        i.display = function(r) {
            var u, e, f;
            i.shellUI.matchesLarge() && (u = n(r).closest(".shell-header-dropdown-tab"), e = u.siblings(".shell-header-dropdown-tab"), u.hasClass("active") || (e.removeClass("active"), u.addClass("active")), f = u.closest(".shell-header-dropdown-content"), t.shellNavDropdown.adjustMenuPaneSize(u, f), u.find(".shell-header-dropdown-tab-content").length ? (f.removeClass("shell-header-dropdown-content-notab"), i.displayImg(u)) : f.hasClass("shell-header-dropdown-content-notab") || f.addClass("shell-header-dropdown-content-notab"))
        };
        i.displayImg = function(t) {
            t.find("img[data-src]").attr("src", function() {
                return n(this).attr("data-src")
            }).removeAttr("data-src")
        };
        i.toggle = function(t) {
            var r = n(t).closest(".shell-header-dropdown-tab"),
                u = r.siblings(".shell-header-dropdown-tab"),
                f = 200,
                e = r.find(".shell-header-dropdown-tab-content"),
                o = u.find(".shell-header-dropdown-tab-content");
            o.slideUp(f, i.closed);
            e.slideToggle(f).promise().done(function() {
                this.is(":hidden") ? r.removeClass("active") : (r.addClass("active"), u.removeClass("active"))
            })
        };
        i.displayFirst = function(n) {
            i.display(n.find(".shell-header-dropdown-tab:first-child .shell-header-dropdown-tab-label a"))
        };
        i.init = function() {
            n(".shell-header-dropdown-tab-label a").on("click.shellNavTab", function() {
                var t = n(this).closest(".shell-header-dropdown-tab-label");
                return !t.hasClass("shell-header-L2menu-direct-link") && !t.hasClass("shell-header-L2menu-direct-link-withL3") ? (i.shellUI.matchesSmall() && i.toggle(this), !1) : !0
            });
            n(".shell-header-dropdown-tab-label").on("click.shellNavTab", function() {
                return n(this).hasClass("shell-header-L2menu-direct-link-withL3") && i.shellUI.matchesSmall() && i.toggle(this), !0
            });
            n(".shell-header-dropdown-tab-label>a").on("focus", function() {
                return i.display(this), !0
            })
        };
        i.init()
    }

    function e(t) {
        var r = this,
            i = n(".shell-header-nav-wrapper"),
            e = n(".shell-header-nav-toggle"),
            o = n(".shell-header-wrapper"),
            s = n(".shell-header-actions"),
            h = n(".shell-header-toggle"),
            u = n(".shell-header-top"),
            f = n(".shell-header-user-container");
        r.shellUI = t;
        r.init = function() {
            n(".shell-header-toggle-search").on("click.shellToggle", function() {
                var t = n(".shell-search");
                n(this).toggleClass("active");
                t.toggleClass("expanded");
                t.hasClass("expanded") ? (t.find('input[type="search"]').focus(), o.css("height", "auto")) : o.css("height", "")
            });
            n(".shell-header-toggle-menu").on("click.shellToggle", function() {
                r.toggleHeaderNav()
            });
            n(document).on("keydown", function(n) {
                var t = n.keyCode || n.width;
                t === 27 && r.closeNav()
            })
        };
        r.handleSearchResize = function() {
            if (r.shellUI.matchesLarge()) {
                var e = i.outerWidth(!0) + i.offset().left + 40,
                    o = i.offset().left,
                    t = n("body").css("direction") === "rtl";
                !t && e > s.offset().left && h.offset().left - e < 250 || t && f.length && o - f.offset().left - f.outerWidth() < 334 || t && !f.length && o - u.offset().left < 334 ? u.hasClass("collapse-search") || u.addClass("collapse-search") : u.hasClass("collapse-search") && u.removeClass("collapse-search")
            }
        };
        r.closeNav = function() {
            i.hasClass("opened") && (i.removeClass("opened"), i.hide(), e.removeClass("opened"), n("html").css("overflow") === "hidden" && n("html").css("overflow", "auto"))
        };
        r.toggleHeaderNav = function() {
            var t;
            i.hasClass("opened") || (t = r.shellUI.shellHeader.offsetHeight, i.css("height", "calc(100% - " + t + "px)"), i.show(), n(".shell-header-dropdown-tab-label-mobile-focus").removeClass("shell-header-dropdown-tab-label-mobile-focus"));
            i.toggleClass("opened").promise().done(function() {
                i.hasClass("opened") || setTimeout(function() {
                    i.hide()
                }, 300)
            });
            e.toggleClass("opened");
            var u = window.pageXOffset !== undefined,
                f = (document.compatMode || "") === "CSS1Compat",
                o = u ? window.pageYOffset : f ? document.documentElement.scrollTop : document.body.scrollTop;
            o > 0 && n("html,body").animate({
                scrollTop: 0
            }, 100);
            i.hasClass("opened") ? n("html").css("overflow", "hidden") : n("html").css("overflow", "auto")
        };
        r.init()
    }
    n(function() {
        window.shellUI = new t
    })
})(jQuery);
