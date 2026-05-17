document.getElementById("registerForm")
.addEventListener("submit", async function(e){

    e.preventDefault();

    const nama =
        document.getElementById("regNama").value.trim();

    const username =
        document.getElementById("regUsername").value.trim();

    const password =
        document.getElementById("regPassword").value.trim();

    try {

        const response = await fetch(
            "https://herisusanta.my.id/javalogin/api/auth.php",
            {
                method: "POST",

                headers: {
                    "Content-Type":
                    "application/x-www-form-urlencoded"
                },

                body:
                `action=register&nama=${encodeURIComponent(nama)}&username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`
            }
        );

        const result = await response.json();

        const alertBox =
            document.getElementById("registerAlert");

        alertBox.style.display = "block";

        if(result.success){

            alertBox.style.color = "lime";
            alertBox.innerText =
                "Register berhasil";

        } else {

            alertBox.style.color = "red";
            alertBox.innerText =
                result.message || "Register gagal";
        }

    } catch(error){

        console.error(error);

        alert("Terjadi kesalahan");
    }

});
