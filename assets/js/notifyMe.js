/*
 notifyMe jQuery Plugin v1.0.0
 Copyright (c)2014 Sergey Serafimovich
 Licensed under The MIT License.
*/
(function(e) {
    e.fn.notifyMe = function(t) {
        var n = e.extend({
            msgError404: "Service is not available at the moment. Please check your internet connection or try again later.",
            msgError503: "Oops. Looks like something went wrong. Please try again later.",
            msgErrorValidation: "This email address looks fake or invalid. Please enter a real email address.",
            msgErrorFormat: "Your e-mail address is incorrect. Please check it and try again.",
            msgSuccess: "Congrats! You are in list. We will inform you as soon as we finish."
        }, t);
        var r = e(this);
        var i = e(this).find("input[name=email]");
        var s = e(this).attr("action");
        var o = e(this).find(".note");
        var u = e("<p class='message'></p>").appendTo(e(this));
        var a = e("<i></i>");
        var f = "fa fa-spinner fa-spin";
        var l = "fa fa-check";
        var c = "fa fa-exclamation";
        i.after(a);
        e(this).on("submit", function(t) {
            t.preventDefault();
            var h = i.val();
            var p = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (p.test(h)) {
                a.removeClass();
                a.addClass(f);
                e(this).removeClass("error success");
                u.text("");
                o.show();
                e.ajax({
                    type: "POST",
                    url: s,
                    data: {
                        email: h
                    },
                    dataType: "json",
                    error: function(e) {
                        r.addClass("error");
                        o.hide();
                        a.removeClass();
                        a.addClass(c);
                        if (e.status == 404) {
                            u.text(n.msgError404)
                        } else {
                            u.text(n.msgError503)
                        }
                    }
                }).done(function(e) {
                    o.hide();
                    if (e.status == "success") {
                        r.addClass("success-full").removeClass("bad-email");
                        a.removeClass(f);
						a.removeClass(c);
                        a.addClass(l);
                        u.text(n.msgSuccess)
                    } else {
                        r.addClass("error");
                        a.removeClass(l);
                        a.addClass(c);
                        if (e.type == "ValidationError") {
                            u.text(n.msgErrorValidation)
                        } else {
                            u.text(n.msgError503)
                        }
                    }
                })
            } else {
                e(this).addClass("bad-email");
                o.hide();
                a.removeClass(l);
                a.addClass(c);
                u.text(n.msgErrorFormat)
            }
        })
    }
})(jQuery)
