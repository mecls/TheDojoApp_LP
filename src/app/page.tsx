// 'use client'
// import Image from 'next/image'
// import { useState } from 'react'
// import { Dialog, DialogPanel } from '@headlessui/react'
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
// import logo from '@/app/images/logo.png';
// import group1 from '@/app/images/Group1.png';
// import scheduleIcon from '@/app/images/Glyph.png';
// import compIcon from '@/app/images/Comp.png';
// import IntLearnIcoN from '@/app/images/IntLearnIcon_Orange.png';
// const navigation = [
//   { name: 'Main Features', href: '#' },
//   { name: 'Why Us?', href: '#' },
//   { name: 'Pre-Save', href: '#' },
//   { name: 'FAQ', href: '#' },
// ]

// export default function Home() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

//   return (
//     <div className="bg-white">
//       <header className="absolute inset-x-0 top-0 z-50">
//         <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
//           <div className="flex lg:flex-1">
//             <a href="#" className="-m-1.5 p-1.5">
//               <span className="sr-only">DOJO</span>
//               <Image alt='logo' src={logo} width={250} height={250} />
//             </a>
//           </div>
//           <div className="flex lg:hidden">
//             <button
//               type="button"
//               onClick={() => setMobileMenuOpen(true)}
//               className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
//             >
//               <span className="sr-only">Open main menu</span>
//               <Bars3Icon aria-hidden="true" className="h-6 w-6" />
//             </button>
//           </div>
//           <div className="hidden lg:flex lg:gap-x-12">
//             {navigation.map((item) => (
//               <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
//                 {item.name}
//               </a>
//             ))}
//           </div>
//           <div className="hidden lg:flex lg:flex-1 lg:justify-end">
//             <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
//               Log in <span aria-hidden="true">&rarr;</span>
//             </a>
//           </div>
//         </nav>
//         <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
//           <div className="fixed inset-0 z-50" />
//           <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
//             <div className="flex items-center justify-between">
//               <a href="#" className="-m-1.5 p-1.5">
//                 <span className="sr-only">Your Company</span>
//                 <img
//                   alt=""
//                   src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
//                   className="h-8 w-auto"
//                 />
//               </a>
//               <button
//                 type="button"
//                 onClick={() => setMobileMenuOpen(false)}
//                 className="-m-2.5 rounded-md p-2.5 text-gray-700"
//               >
//                 <span className="sr-only">Close menu</span>
//                 <XMarkIcon aria-hidden="true" className="h-6 w-6" />
//               </button>
//             </div>
//             <div className="mt-6 flow-root">
//               <div className="-my-6 divide-y divide-gray-500/10">
//                 <div className="space-y-2 py-6">
//                   {navigation.map((item) => (
//                     <a
//                       key={item.name}
//                       href={item.href}
//                       className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
//                     >
//                       {item.name}
//                     </a>
//                   ))}
//                 </div>
//                 <div className="py-6">
//                   <a
//                     href="#"
//                     className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
//                   >
//                     Log in
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </DialogPanel>
//         </Dialog>
//       </header>
//       <div id='Home' className="relative isolate px-6 pt-14 lg:px-8 -mb-20">
//         <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
//           <div className="flex flex-grow items-center justify-center gap-x-6">
//             <div className="text-center flex-1 mr-59 mb-28">
//               <h1 className="text-4xl font-bold text-left tracking-tighter text-nowrap text-gray-900 sm:text-6xl">
//                 Manage everything <br/>in your DOJO with <br/>ONE app              </h1>
//               <p className="mt-6 text-lg leading-8 text-left text-gray-600">
//                 Built for DOJO owners from 1 to many Dojo’s - Start Organizing and Managing Yours Today
//               </p>
//               <div className="mt-10 flex items-center justify-left gap-x-6">
//                 <a
//                   href="#"
//                   className="rounded-md bg-orange-500 px-3.5 py-2.5   
//                 text-sm font-semibold text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400"
//                 >
//                   Pre-Save Now!
//                 </a>
//                 <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
//                   Join 67 dojo owners!
//                 </a>
//               </div>
//             </div>
//             <Image  alt='representation of the app ui design' src={group1} width={500} height={500} className="ml-80" />
//           </div>
//         </div>
//       </div>

//       {/* FEATURES SECTION */}
//       <section className="pt-5 pb-12 lg:pt-[120px] lg:pb-[90px]">
//         <div className="container mx-auto ">
//           <div className="-mx-4 flex flex-wrap ">
//             <div className="w-full px-4 md:w-1/2 lg:w-1/3 ">
//                   <Image alt='schedule className icon' src={scheduleIcon} width={40} height={41} className=''/>
//                 <h4 className="text-black mb-3 text-2xl font-semibold ml-14 -mt-9">       
//                 Schedule classNamees
//                 </h4>
//                 <p className="text-black text-lg">
//                   Schedules classNamees and
//                   connect them to google calender.
//                   All your students and coaches will
//                   recive a notification when you create, edit or remove
//                   a schedule.
//                 </p>
//             </div>
//             <div className="w-full px-4 md:w-1/2 lg:w-1/3">
//             <Image alt='competition icon' src={compIcon} width={40} height={41} className=''/>
//                 <h4 className="text-black mb-3 text-2xl font-semibold ml-12 -mt-9">
//                   Competition Analysis
//                 </h4>
//                 <p className="text-black text-lg">
//                   Analyse your students competition
//                   results and let them see their owns.
//                   All students can see their own
//                   results and you can see by:
//                   belt, competition, weight className etc...
//                 </p>
//             </div>
//             <div className="w-full px-4 md:w-1/2 lg:w-1/3">
//             <Image alt='interactive learning icon' src={IntLearnIcoN} width={40} height={41} className=''/>
//                 <h4 className="text-black mb-3 text-2xl font-semibold ml-12 -mt-9">Interactive Learning</h4>
//                 <p className="text-black text-lg">
//                   Give your students and specially
//                   the kids in your dojos
//                   an interactive way to learn
//                   and grow.
//                   From technique names to
//                   the competition rules
//                   and more.
//                 </p>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* PRE SAVE SECTION*/}
//       <div  className="bg-white py-24 sm:py-28">
//         <div className="mx-auto max-w-7xl px-6 lg:px-8">
//           <div className="mx-auto max-w-2xl sm:text-center">
//             <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Life-time Deal</h2>
//             <p className="mt-6 text-lg leading-8 text-gray-600">Pay now and get Dojo forever and dont worry about the future. This is a one time deal opportunity, after the app is launched the price will be 49,99€/month. </p>
//           </div>
//           <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
//             <div className="p-8 sm:p-10 lg:flex-auto">
//               <h3 className="text-2xl font-bold tracking-tight text-gray-900">Lifetime membership</h3>
//               <p className="mt-6 text-base leading-7 text-gray-600">Updates, maintenence, costumer help, everything is yours forever</p>
//               <div className="mt-10 flex items-center gap-x-4">
//                 <h4 className="flex-none text-sm font-semibold leading-6 text-orange-500">What’s included</h4>
//                 <div className="h-px flex-auto bg-gray-100"></div>
//               </div>
//               <ul role="list" className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
//                 <li className="flex gap-x-3">
//                   <svg className="h-6 w-5 flex-none text-orange-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                     <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
//                   </svg>
//                   Previous access and your ideas implemented
//                 </li>
//                 <li className="flex gap-x-3">
//                   <svg className="h-6 w-5 flex-none text-orange-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                     <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
//                   </svg>
//                   Competition Analytics
//                 </li>
//                 <li className="flex gap-x-3">
//                   <svg className="h-6 w-5 flex-none text-orange-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                     <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
//                   </svg>
//                   className Scheduling with google calender integration
//                 </li>
//                 <li className="flex gap-x-3">
//                   <svg className="h-6 w-5 flex-none text-orange-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                     <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
//                   </svg>
//                   Interactive Learning
//                 </li>
//               </ul>
//             </div>
//             <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
//               <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
//                 <div className="mx-auto max-w-xs px-8">
//                   <p className="text-base font-semibold text-gray-600">Pay once, own it forever</p>
//                   <p className="mt-6 flex items-baseline justify-center gap-x-2">
//                     <span className="text-5xl font-bold tracking-tight text-gray-900">99,99€</span>
//                     <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">EUR</span>
//                   </p>
//                   <a href="#" className="mt-10 block w-full rounded-md bg-orange-500 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get access</a>
//                   <p className="mt-6 text-xs leading-5 text-gray-600">Invoices and receipts available for easy company reimbursement</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//     </div>
//   )
// }



//IN BLUE

'use client'
import Image from 'next/image';
import { useState } from 'react';
import { FooterComponent } from './components/FooterComponent';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '@/app/images/logo.png';
import group1 from '@/app/images/Group1.png';
import scheduleIcon from '@/app/images/SchedclassIcon_blue.png';
import compIcon from '@/app/images/CompIcon.png';
import IntLearnIcoN from '@/app/images/IntLearnIcon.png';
import checkMark from '@/app/images/checkMark.png';
import secondImg from '@/app/images/IntLearning.png';
import thirdImg from '@/app/images/compResults.png';

const navigation = [
  { name: 'Main Features', href: '#main-features' },
  { name: 'Why Us?', href: '#why' },
  { name: 'Pre-Save', href: '#pre-save' },
  { name: 'FAQ', href: '#FAQ' },
]

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">DOJO</span>
              <Image alt='logo' src={logo} width={250} height={250} />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-16 mr-36">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
      <div  className="relative isolate px-6 pt-14 lg:px-8 -mb-20">
        <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
          <div className="flex flex-grow items-center justify-center gap-x-6">
            <div className="text-center flex-1 mr-59 mb-28">
              <h1 className="text-4xl font-bold text-left tracking-tighter text-nowrap text-gray-900 sm:text-6xl">
                Manage everything <br/>in your DOJO with <br/>ONE app              </h1>
              <p className="mt-6 text-lg leading-8 text-left text-gray-600">
                Built for DOJO owners from 1 to many Dojo’s - Start Organizing and Managing Yours Today!
              </p>
              <div className="mt-10 flex items-center justify-left gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-blue-900 px-3.5 py-2.5   
                text-sm font-semibold text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400"
                >
                  Pre-Save Now!
                </a>
                <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                  Join 67 dojo owners!
                </a>
              </div>
            </div>
            <Image  alt='representation of the app ui design' src={group1} width={500} height={500} className="ml-60" />
          </div>
        </div>
      </div>

      {/* FEATURES SECTION */}
      <section id='main-features' className="pt-5 pb-12 lg:pt-[120px] lg:pb-[90px]">
        <div className="container mx-auto ">
          <div className="-mx-4 flex flex-wrap ">
            <div className="w-full px-4 md:w-1/2 lg:w-1/3 ">
                  <Image alt='schedule class icon' src={scheduleIcon} width={40} height={41} />
                <h4 className="text-black mb-3 text-2xl font-semibold ml-14 -mt-9">       
                Schedule classNamees
                </h4>
                <p className="text-black text-lg">
                  Schedules classes and
                  connect them to google calender.
                  All your students and coaches will
                  recive a notification when you create, edit or remove
                  a schedule.
                </p>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <Image alt='competition icon' src={compIcon} width={40} height={41} />
                <h4 className="text-black mb-3 text-2xl font-semibold ml-12 -mt-9">
                  Competition Analysis
                </h4>
                <p className="text-black text-lg">
                  Analyse your students competition
                  results and let them see their owns.
                  All students can see their own
                  results and you can see by:
                  belt, competition, weight class etc...
                </p>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <Image alt='competition icon' src={IntLearnIcoN} width={40} height={41} />
                <h4 className="text-black mb-3 text-2xl font-semibold ml-12 -mt-9">Interactive Learning</h4>
                <p className="text-black text-lg">
                  Give your students and specially
                  the kids in your dojos
                  an interactive way to learn
                  and grow.
                  From technique names to
                  the competition rules
                  and more.
                </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Use Dojo? */}
<section>
<div id="why" className="relative isolate px-6 lg:px-8 -mb-60">
  <div className=" mx-auto max-w-6xl py-32 sm:py-48 lg:py-56">
    <div className="flex flex-grow  flex-row-reverse items-center justify-center gap-x-6">
      <div className="text-center  flex-1 ml-59 -mb-5">
        <h1 className="text-4xl font-bold text-left tracking-tighter text-nowrap text-gray-900 sm:text-4xl">
        Why use DOJO?
        </h1>
        <p className="mt-6 text-lg leading-8 text-left text-gray-600">
        You are a dojo owner who wants to optimise the hard part of managing all of your students and coaches which takes your focus of getting more students and bettering your dojos
         </p>
         <Image alt='representation of the app ui design' src={checkMark} width={20} height={24} className="mt-6" />
         <p className="-mt-7 text-xl leading-8 text-left text-black ml-8" >Get up to 50% more time </p>
         <Image alt='representation of the app ui design' src={checkMark} width={20} height={24} className="mt-6" />
         <p className="-mt-7 text-xl leading-8 text-left text-black ml-8">Offer more value for your students</p>
         <Image alt='representation of the app ui design' src={checkMark} width={20} height={24} className="mt-6" />
         <p className="-mt-7 text-xl leading-8 text-left text-black ml-8">Make more money by having more time and energy for other things</p>
             </div>
      <Image alt='representation of the app ui design' src={secondImg} width={350} height={350} className="mr-64 -mt-15" />
    </div>
  </div>
</div>
          {/* MORE FEATURES */}
          <div  className="relative isolate px-6 lg:px-8 -mb-40">
        <div className="mx-auto max-w-6xl py-32 sm:py-48 lg:py-56">
          <div className="flex flex-grow items-center justify-center gap-x-6">
            <div className="text-center flex-1 mr-59 mb-28">
              <h1 className="text-4xl font-bold text-left tracking-tighter text-nowrap text-gray-900 sm:text-4xl">
             Easy management in your hands          </h1>
              <p className="mt-6 text-lg leading-8 text-left text-gray-600">
              Connect with everyone trought one app
              </p>
              <Image alt='representation of the app ui design' src={checkMark} width={20} height={24} className="mt-6" />
         <p className="-mt-7 text-lg leading-8 text-left text-black ml-8" >Schedule classes and notify your students/coaches </p>
         <Image alt='representation of the app ui design' src={checkMark} width={20} height={24} className="mt-6" />
         <p className="-mt-7 text-lg leading-8 text-left text-black ml-8">Analyse you students competition results</p>
         <Image alt='representation of the app ui design' src={checkMark} width={20} height={24} className="mt-6" />
         <p className="-mt-7 text-lg leading-8 text-left text-black ml-8">Offer interactive learning and Boost your students</p>
         <Image alt='representation of the app ui design' src={checkMark} width={20} height={24} className="mt-6" />
         <p className="-mt-7 text-lg leading-8 text-left text-black ml-8">Give your feedback on dojo app and see your ideas and needs met</p>
            </div>
            <Image  alt='representation of the app ui design' src={thirdImg} width={350} height={350} className="ml-60" />
          </div>
        </div>
      </div>
      
</section>
          {/* LOOM VIDEO */}

      <section className='py-8 mt-60 sm:py-8 mb-80 flex items-center justify-center'>
  <div className='absolute flex items-center justify-center w-full h-full'>
    <iframe
      src="https://www.loom.com/embed/c420eaf83512447fa199941a6c89046b?sid=31f3c8e6-e58b-4ba5-ad9b-833a66a004bd"
      className="w-1/2 h-1/2"
      allowFullScreen
    ></iframe>
  </div>
</section>




        {/* FAQ SECTION */}
         
<section id='FAQ' className="bg-white dark:bg-gray-900 mt-80q">
  <div className="py-8  px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Questions you may have</h2>
      <p className="-mt-0 text-md leading-8 text-gray-600">The app is being built and will launch in the last weeks of march</p>
      <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
          <div>
              <div className="mb-10">
                  <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                      <svg className="flex-shrink-0 mr-2 w-5 h-5 text-blue-800 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                      What other features will it have?
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">The more features you need the more we will build in order to optimise the managment of Dojos.</p>
              </div>
              <div className="mb-10">
                  <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                      <svg className="flex-shrink-0 mr-2 w-5 h-5 text-blue-800 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                      Will my students have access to it with features for them?
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">Short answer, Yes! Your students will be able to see their schedules, results in competitions and learn with the interactive learning tool. Find out more about each feature by subscribing to the email list!</p>
              </div>
             
          </div>
          <div>
          <div className="mb-10">                        
                  <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                      <svg className="flex-shrink-0 mr-2 w-5 h-5 text-blue-800 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                      How does interactive Learning works?
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">Its a feature with similar styles that languages apps work, they will allow the students from an early age to learn thecnique names, competition rules and more in a fun and interactive way.</p>
              </div>
              <div className="mb-10">
                  <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                      <svg className="flex-shrink-0 mr-2 w-5 h-5 text-blue-800 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                      How much will it cost after being built?
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">The app after launched will have a cost of 49,99€/month. Have in mind that after you purchase the app as the owner all your students and coaches will be able to use it for FREE!</p>
              </div>
            
          </div>
      </div>
  </div>
</section>

      {/* PRE SAVE SECTION*/}
      <div id='pre-save'  className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Life-time Deal</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">Pay now and get Dojo forever, dont worry about the future. This is a one time deal opportunity, after the app is launched the price will be 49,99€/month. </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">Lifetime membership</h3>
              <p className="mt-6 text-base leading-7 text-gray-600">Updates, maintenence, costumer help, everything is yours forever</p>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-blue-900">What’s included</h4>
                <div className="h-px flex-auto bg-gray-100"></div>
              </div>
              <ul role="list" className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
                <li className="flex gap-x-3">
                  <svg className="h-6 w-5 flex-none text-blue-900" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  Streamline your payments with Automated invoicing and Payment tracking
                </li>
                <li className="flex gap-x-3">
                  <svg className="h-6 w-5 flex-none text-blue-900" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                 Get Competition Analytics from all your students 
                </li>
                <li className="flex gap-x-3">
                  <svg className="h-6 w-5 flex-none text-blue-900" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  Class scheduling with google calender integration and more
                </li>
                <li className="flex gap-x-3">
                  <svg className="h-6 w-5 flex-none text-blue-900" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  Interactive Learning for everyone to learn 
                </li>
              </ul>
            </div>
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="mx-auto max-w-xs px-8">
                  <p className="text-base font-semibold text-gray-600">Pay once, own it forever</p>
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-gray-900">99,99$</span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">EUR</span>
                  </p>
                  <a href="#" className="mt-10 block w-full rounded-md bg-blue-900 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get access</a>
                  <p className="mt-6 text-xs leading-5 text-gray-600">Invoices and receipts available for easy company reimbursement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer section */}
    
    <FooterComponent/>
    
    </div>
  )
}
