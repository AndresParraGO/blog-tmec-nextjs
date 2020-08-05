
import Top from '../top'
import Footer from '../footer'
import Accessibility from '../accessibility/'


export default function Layout( {children, allPosts} ) {
  return (
    <>
      <Top allPosts={allPosts} />

      <Accessibility />
      
      <main>
        {children}
      </main>
      
      <Footer />
    </>
  )
}