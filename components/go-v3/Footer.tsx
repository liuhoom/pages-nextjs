interface FooterProps {}

export function Footer({}: FooterProps) {
  return (
    <div className='mt-auto w-full items-center text-center justify-center p-6 whitespace-nowrap'>
      <p className='text-sm text-gray-600'>
        Copyright&copy; {new Date().getFullYear()} liuhoom&apos;s project
      </p>
    </div>
  )
}
