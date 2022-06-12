function(instance, context) {
    if (!window.psb4phS3) {
        let containers = instance.canvas.closest(".Group");
        if (containers && containers.length && containers[0]) {
            window.psb4phS3 = containers[0];
            window.psb4phS3.AzlRoog1 = instance;
            window.psb4phS3.p2Vap55f = true;  /* first-display flag */
            window.psb4phS3.or5owp2j = false; /* internal 'expanded' state */
        }
    } else {
		alert("There can only be one splash element on a page!");
    }
}