function(instance, properties, context) {
    let containers = instance.canvas.closest(".Group");
    if (containers && containers.length && containers[0] && containers[0] === window.psb4phS3) {
    	window.psb4phS3.llaV43og = properties["Dimension"];
        window.psb4phS3.Akv6p2_1 = properties["Duration"];
        window.psb4phS3.kAovWlqp = properties["Auto-Expand"];
        window.psb4phS3.l4pgW2vv = properties["Auto-Collapse"];
        
        const duration = properties["Duration"];
        if (duration) {
            const transition = duration + "ms ease-out";
            if (!$("style").text().includes(".aovp3g7nv-" + duration)) {
                $("<style/>", { text: ".aovp3g7nv-" + duration + " {-webkit-transition: min-height " + transition + ", max-height " + transition + " !important; -moz-transition: min-height " + transition + ", max-height " + transition + " !important; transition: min-height " + transition + ", max-height " + transition + " !important; }" }).appendTo("head");
            }
            if (!$("style").text().includes(".aovp3g7nh-" + duration)) {
                $("<style/>", { text: ".aovp3g7nh-" + duration + " {-webkit-transition: min-width " + transition + ", max-width " + transition + " !important; -moz-transition: min-width " + transition + ", max-width " + transition + " !important; transition: min-width " + transition + ", max-width " + transition + " !important; }" }).appendTo("head");
            }
            if (!$("style").text().includes(".aovp3g7nb-" + duration)) {
                $("<style/>", { text: ".aovp3g7nb-" + duration + " {-webkit-transition: min-width " + transition + ", max-width " + transition + ", min-height " + transition + ", max-height " + transition + " !important; -moz-transition: min-width " + transition + ", max-width " + transition + ", min-height " + transition + ", max-height " + transition + " !important; transition: min-width " + transition + ", max-width " + transition + ", min-height " + transition + ", max-height " + transition + " !important; }" }).appendTo("head");
            }
        }
        
        if ((0 === window.scrollY && !window.psb4phS3.or5owp2j) && (window.psb4phS3.p2Vap55f && "On Load" === window.psb4phS3.kAovWlqp || "On Scroll" === window.psb4phS3.kAovWlqp)) {
        	window.vkE5Hsx3(window.psb4phS3, !window.psb4phS3.p2Vap55f);
        }
        
        if ((0 < window.scrollY && window.psb4phS3.or5owp2j) && ("On Scroll" === window.psb4phS3.l4pgW2vv)) {
	        window.b6p3gpD3(window.psb4phS3, true);
        }
    }
}