import RootLayout from "@/components/layouts/RootLayout"

const PcBuilderPage = () => {
  return (
    <div>PcBuilderPage</div>
  )
}

export default PcBuilderPage


PcBuilderPage.getLayout = function getLayout(page) {
  return (
    <RootLayout>
     {page}
    </RootLayout>
  )
}