import React from 'react'

const OldProjects = () => {
  return (
    <section> 
        <div className="mx-auto w-full mt-16 px-8 md:px-16 xl:px-16">
            <div className="mb-4 w-full">
                <p className="text-primary xl:text-2xl md:text-lg">Featured listings</p>
                <h2 className="md:text-3xl xl:text-5xl text-2xl font-bold text-secondary">Available Propreties</h2>
            </div>
            <div className="mx-auto mt-8 grid gap-8 lg:grid-cols-2">
                <a href="#" className="flex flex-col gap-4 rounded-md [grid-area:1/1/4/2] lg:pr-8">
                    <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94016de6cf90_Rectangle%2035.svg" alt="" className="inline-block h-72 w-full object-cover" />
                    <div className="flex flex-col items-start py-4">
                        <div className="mb-4 rounded-md bg-[#f2f2f7] px-2 py-1.5">
                            <p className="text-sm font-semibold text-[#6574f8]">CATEGORY NAME</p>
                        </div>
                        <p className="mb-4 text-xl font-bold md:text-2xl">The latest news with Flowspark</p>
                        <div className="flex flex-col text-sm text-[#636262] lg:flex-row">
                            <p>Laila Bahar</p>
                            <p className="mx-2 hidden lg:block">-</p>
                            <p>6 mins read</p>
                        </div>
                    </div>
                </a>
                <div className="md:flex md:justify-between lg:flex-col">
                    <a href="#" className="flex flex-col pb-8 lg:mb-3 lg:flex-row lg:[border-bottom:1px_solid_rgb(236,_236,_236)]">
                        <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94016de6cf90_Rectangle%2035.svg" alt="" className="inline-block h-60 w-full object-cover md:h-36 lg:h-32 lg:w-32" />
                        <div className="flex flex-col items-start pt-4 lg:px-8">
                            <div className="mb-2 rounded-md bg-[#f2f2f7] px-2 py-1.5">
                                <p className="text-sm font-semibold text-[#6574f8]">CATEGORY NAME</p>
                            </div>
                            <p className="mb-2 text-sm font-bold sm:text-base">Here is the title for this blog</p>
                            <div className="flex flex-col items-start">
                                <div className="flex flex-col text-sm text-[#636262] sm:text-base lg:flex-row lg:items-center">
                                    <p>Laila Bahar</p>
                                    <p className="mx-2 hidden lg:block">-</p>
                                    <p>6 mins read</p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="#" className="flex flex-col pb-8 lg:mb-3 lg:flex-row lg:[border-bottom:1px_solid_rgb(236,_236,_236)]">
                        <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94016de6cf90_Rectangle%2035.svg" alt="" className="inline-block h-60 w-full object-cover md:h-36 lg:h-32 lg:w-32" />
                        <div className="flex flex-col items-start pt-4 lg:px-8">
            <div className="mb-2 rounded-md bg-[#f2f2f7] px-2 py-1.5">
              <p className="text-sm font-semibold text-[#6574f8]">CATEGORY NAME</p>
            </div>
            <p className="mb-2 text-sm font-bold sm:text-base">Here is the title for this blog</p>
            <div className="flex flex-col items-start">
              <div className="flex flex-col text-sm text-[#636262] sm:text-base lg:flex-row lg:items-center">
                <p>Laila Bahar</p>
                <p className="mx-2 hidden lg:block">-</p>
                <p>6 mins read</p>
              </div>
            </div>
          </div>
        </a>
        <a href="#" className="flex flex-col pb-8 lg:mb-3 lg:flex-row lg:[border-bottom:1px_solid_rgb(236,_236,_236)]">
          <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94016de6cf90_Rectangle%2035.svg" alt="" className="inline-block h-60 w-full object-cover md:h-36 lg:h-32 lg:w-32" />
          <div className="flex flex-col items-start pt-4 lg:px-8">
            <div className="mb-2 rounded-md bg-[#f2f2f7] px-2 py-1.5">
              <p className="text-sm font-semibold text-[#6574f8]">CATEGORY NAME</p>
            </div>
            <p className="mb-2 text-sm font-bold sm:text-base">Here is the title for this blog</p>
            <div className="flex flex-col items-start">
              <div className="flex flex-col text-sm text-[#636262] sm:text-base lg:flex-row lg:items-center">
                <p>Laila Bahar</p>
                <p className="mx-2 hidden lg:block">-</p>
                <p>6 mins read</p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</section>
  )
}

export default OldProjects