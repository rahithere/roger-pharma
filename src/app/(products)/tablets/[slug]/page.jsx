import { TitleSection } from "@/components/ui/titleSection";

export default async function TabletDetailPage() {

    return (
        <>
            <TitleSection title={product.name} prevLink={"products"} currentLink={product.name} />
        </>
    )
}