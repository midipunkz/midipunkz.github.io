export default function Metaverses() {
    return (
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-100">
            As seen in the Metaverse!
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <a href="https://www.spatial.io/s/MiDiPunkz-DJ-Eden-64397bcfc5837fcb1d20aaeb?share=2051843384976615882">
                  <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://assets.website-files.com/5fe239511862dad3b1c6985a/6364339cd46c8b6397afbefa_spatial_inline_white_logo.svg"
              alt="Spatial"
              width={158}
              height={48}
            />
            </a>
          
            <a href="https://oncyber.io/midipunkz">
                <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://docs.oncyber.io/img/logo_white.png"
              alt="OnCyber"
              width={158}
              height={48}
            /></a>
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="/metaverses/decentraland-mana-logo.svg"
              alt="Decentaland"
              width={158}
              height={48}
            />
            {/* <img
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
              alt="SavvyCal"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
              alt="Statamic"
              width={158}
              height={48}
            /> */}
          </div>
        </div>
      </div>
    )
  }