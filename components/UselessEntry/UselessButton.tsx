'use client';
import { memo, useState, useEffect } from "react";
import { sitesList } from "@/helpers/data";

function UselessButton() {
    const [sites, setSites] = useState<string[]>(sitesList);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadSites = async () => {
            // 3 saniye timeout
            const timeoutId = setTimeout(() => {
                console.log("⏱️ Timeout! Fallback sitesList kullanılıyor.");
                setSites(sitesList);
                setIsLoading(false);
            }, 3000);

            try {
                const res = await fetch("/api/sites");
                const data = await res.json();
                
                // Başarılı olursa timeout'u iptal et
                clearTimeout(timeoutId);
                
                if (data.length > 0) {
                    console.log("✅ API'den yüklendi! Site sayısı:", data.length);
                    setSites(data);
                } else {
                    console.log("⚠️ API boş array döndü, fallback kullanılıyor.");
                    setSites(sitesList);
                }
            } catch (error) {
                // Hata durumunda timeout'u iptal et
                clearTimeout(timeoutId);
                console.error("❌ API hatası, fallback kullanılıyor:", error);
                setSites(sitesList);
            } finally {
                setIsLoading(false);
            }
        };

        loadSites();
    }, []);

    const handleClick = () => {
        const randIndex = Math.floor(Math.random() * sites.length);
        const newSite = sites[randIndex];
        
        console.log("🚀 Açılıyor:", newSite);
        window.open(newSite, "_blank");
    }

    return (
        <div className="text-[45px] flex gap-2">
            <div className="font-thin text-shadow-sm text-shadow-gray-300">→</div>
            <button
                onClick={handleClick}
                className="useless-button"
                disabled={isLoading}
            >
                PLEASE
            </button>
            <div className="font-thin text-shadow-sm text-shadow-gray-300">←</div>
        </div>
    );
}

export default memo(UselessButton);