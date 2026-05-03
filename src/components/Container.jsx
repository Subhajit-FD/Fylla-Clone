const Container = ({children, className}) => {
  return (
    <section className={`p-0 md:p-4 w-full ${className}`}>
      {children}
    </section>
  )
}

export default Container