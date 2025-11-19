export async function GET() {
    try {
        const res = await fetch("https://theuselessweb.com/js/uselessweb.js");

        if (!res.ok) {
            return Response.json([], { status: 500 });
        }

        const jsText = await res.text();
        const match = jsText.match(/var sitesList = \[([\s\S]*?)\]/);

        if (match) {
            const arrayString = '[' + match[1] + ']';
            
            try {
                // JavaScript array'ini doğrudan çalıştır
                const sitesArray = eval(arrayString);
                
                // Basit doğrulama
                if (Array.isArray(sitesArray) && sitesArray.length > 0) {
                    console.log("✅ Başarılı! Site sayısı:", sitesArray.length);
                    return Response.json(sitesArray);
                }
                
            } catch (e) {
                console.error('❌ Eval hatası:', e);
                return Response.json([], { status: 500 });
            }
        }

        return Response.json([]);

    } catch (error) {
        console.error("API Route Error:", error);
        return Response.json([], { status: 500 });
    }
}