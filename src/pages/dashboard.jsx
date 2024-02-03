import React, { useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Dashboard() {
  useEffect(() => {
    // window.updateCharts();
  });

  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <section className='py-4 overflow-hidden'>
          <h2 className="px-10 py-4 text-xl font-bold">Dashboard - Secure Exams for So & So University</h2>
          <div className='container px-4 mx-auto'>
            <div className='flex flex-wrap -m-3'>
              <div className='w-full sm:w-1/2 md:w-1/3 p-3'>
                <div className='px-5 py-3.5 h-full bg-white border rounded-lg'>
                  <div className='flex flex-wrap items-center justify-between -m-1'>
                    <div className='w-auto p-1'>
                      <p className='text-sm text-neutral-500 font-medium'>
                        New Customers
                      </p>
                    </div>
                    <div className='w-auto p-1'>
                      <a
                        className='inline-flex text-xs hover:text-neutral-500 font-medium'
                        href='#'
                      >
                        <span className='mr-2'>This week</span>
                        <svg
                          width={16}
                          height={16}
                          viewBox='0 0 16 16'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M12.6668 6L8.00016 10.6667L3.3335 6'
                            stroke='currentColor'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className='flex flex-wrap justify-between -m-1'>
                    <div className='w-full sm:w-5/12 p-1'>
                      <h3 className='font-heading mb-1 text-3xl tracking-tight font-semibold'>
                        137
                      </h3>
                    </div>
                    <div className='w-full sm:w-7/12 p-1'>
                      <div className='chart' data-type='area-state2-2' />
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full sm:w-1/2 md:w-1/3 p-3'>
                <div className='px-5 py-3.5 h-full bg-white border rounded-lg'>
                  <div className='flex flex-wrap items-center justify-between -m-1'>
                    <div className='w-auto p-1'>
                      <p className='text-sm text-neutral-500 font-medium'>
                        Revenue
                      </p>
                    </div>
                    <div className='w-auto p-1'>
                      <a
                        className='inline-flex text-xs hover:text-neutral-500 font-medium'
                        href='#'
                      >
                        <span className='mr-2'>This week</span>
                        <svg
                          width={16}
                          height={16}
                          viewBox='0 0 16 16'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M12.6668 6L8.00016 10.6667L3.3335 6'
                            stroke='currentColor'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className='flex flex-wrap justify-between -m-1'>
                    <div className='w-full sm:w-5/12 p-1'>
                      <h3 className='font-heading mb-1 text-3xl tracking-tight font-semibold'>
                        $5799.00
                      </h3>
                    </div>
                    <div className='w-full sm:w-7/12 p-1'>
                      <div className='chart' data-type='area-state2-1' />
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full sm:w-1/2 md:w-1/3 p-3'>
                <div className='px-5 py-3.5 h-full bg-white border rounded-lg'>
                  <div className='flex flex-wrap items-center justify-between -m-1'>
                    <div className='w-auto p-1'>
                      <p className='text-sm text-neutral-500 font-medium'>
                        Occupancy
                      </p>
                    </div>
                    <div className='w-auto p-1'>
                      <a
                        className='inline-flex text-xs hover:text-neutral-500 font-medium'
                        href='#'
                      >
                        <span className='mr-2'>This week</span>
                        <svg
                          width={16}
                          height={16}
                          viewBox='0 0 16 16'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M12.6668 6L8.00016 10.6667L3.3335 6'
                            stroke='currentColor'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className='flex flex-wrap justify-between -m-1'>
                    <div className='w-full sm:w-5/12 p-1'>
                      <h3 className='font-heading mb-1 text-3xl tracking-tight font-semibold'>
                        0.7%
                      </h3>
                    </div>
                    <div className='w-full sm:w-7/12 p-1'>
                      <div className='chart' data-type='area-state2-3' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='py-4 overflow-hidden'>
          <div className='container px-4 mx-auto'>
            <div className='flex flex-wrap -m-2'>
              <div className='w-full sm:w-1/2 lg:w-1/5 p-2'>
                <div className='px-5 py-3 h-full bg-white rounded-lg'>
                  <div className='flex flex-wrap justify-between -m-2'>
                    <div className='w-auto p-2'>
                      <p className='mb-4 text-sm text-neutral-500 font-medium'>
                        Total MRR
                      </p>
                      <h3 className='font-heading text-3xl font-semibold'>
                        $72,524
                      </h3>
                    </div>
                    <div className='w-auto p-2'>
                      <svg
                        width={18}
                        height={18}
                        viewBox='0 0 18 18'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M9 9H9.75C9.75 8.58579 9.41421 8.25 9 8.25V9ZM9 12H8.25C8.25 12.4142 8.58579 12.75 9 12.75V12ZM9.75 12.75C10.1642 12.75 10.5 12.4142 10.5 12C10.5 11.5858 10.1642 11.25 9.75 11.25V12.75ZM8.25 8.25C7.83579 8.25 7.5 8.58579 7.5 9C7.5 9.41421 7.83579 9.75 8.25 9.75V8.25ZM9 5.25C8.58579 5.25 8.25 5.58579 8.25 6C8.25 6.41421 8.58579 6.75 9 6.75V5.25ZM9.0075 6.75C9.42171 6.75 9.7575 6.41421 9.7575 6C9.7575 5.58579 9.42171 5.25 9.0075 5.25V6.75ZM8.25 9V12H9.75V9H8.25ZM9 12.75H9.75V11.25H9V12.75ZM9 8.25H8.25V9.75H9V8.25ZM15 9C15 12.3137 12.3137 15 9 15V16.5C13.1421 16.5 16.5 13.1421 16.5 9H15ZM9 15C5.68629 15 3 12.3137 3 9H1.5C1.5 13.1421 4.85786 16.5 9 16.5V15ZM3 9C3 5.68629 5.68629 3 9 3V1.5C4.85786 1.5 1.5 4.85786 1.5 9H3ZM9 3C12.3137 3 15 5.68629 15 9H16.5C16.5 4.85786 13.1421 1.5 9 1.5V3ZM9 6.75H9.0075V5.25H9V6.75Z'
                          fill='#B8C1CC'
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full sm:w-1/2 lg:w-1/5 p-2'>
                <div className='px-5 py-3 h-full bg-white rounded-lg'>
                  <div className='flex flex-wrap justify-between -m-2'>
                    <div className='w-auto p-2'>
                      <p className='mb-4 text-sm text-neutral-500 font-medium'>
                        Total Subscriptions
                      </p>
                      <h3 className='font-heading text-3xl font-semibold'>
                        2,438
                      </h3>
                    </div>
                    <div className='w-auto p-2'>
                      <svg
                        width={18}
                        height={18}
                        viewBox='0 0 18 18'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M9 9H9.75C9.75 8.58579 9.41421 8.25 9 8.25V9ZM9 12H8.25C8.25 12.4142 8.58579 12.75 9 12.75V12ZM9.75 12.75C10.1642 12.75 10.5 12.4142 10.5 12C10.5 11.5858 10.1642 11.25 9.75 11.25V12.75ZM8.25 8.25C7.83579 8.25 7.5 8.58579 7.5 9C7.5 9.41421 7.83579 9.75 8.25 9.75V8.25ZM9 5.25C8.58579 5.25 8.25 5.58579 8.25 6C8.25 6.41421 8.58579 6.75 9 6.75V5.25ZM9.0075 6.75C9.42171 6.75 9.7575 6.41421 9.7575 6C9.7575 5.58579 9.42171 5.25 9.0075 5.25V6.75ZM8.25 9V12H9.75V9H8.25ZM9 12.75H9.75V11.25H9V12.75ZM9 8.25H8.25V9.75H9V8.25ZM15 9C15 12.3137 12.3137 15 9 15V16.5C13.1421 16.5 16.5 13.1421 16.5 9H15ZM9 15C5.68629 15 3 12.3137 3 9H1.5C1.5 13.1421 4.85786 16.5 9 16.5V15ZM3 9C3 5.68629 5.68629 3 9 3V1.5C4.85786 1.5 1.5 4.85786 1.5 9H3ZM9 3C12.3137 3 15 5.68629 15 9H16.5C16.5 4.85786 13.1421 1.5 9 1.5V3ZM9 6.75H9.0075V5.25H9V6.75Z'
                          fill='#B8C1CC'
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full sm:w-1/2 lg:w-1/5 p-2'>
                <div className='px-5 py-3 h-full bg-white rounded-lg'>
                  <div className='flex flex-wrap justify-between -m-2'>
                    <div className='w-auto p-2'>
                      <p className='mb-4 text-sm text-neutral-500 font-medium'>
                        Net Billing
                      </p>
                      <h3 className='font-heading text-3xl font-semibold'>
                        $262,639
                      </h3>
                    </div>
                    <div className='w-auto p-2'>
                      <svg
                        width={18}
                        height={18}
                        viewBox='0 0 18 18'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M9 9H9.75C9.75 8.58579 9.41421 8.25 9 8.25V9ZM9 12H8.25C8.25 12.4142 8.58579 12.75 9 12.75V12ZM9.75 12.75C10.1642 12.75 10.5 12.4142 10.5 12C10.5 11.5858 10.1642 11.25 9.75 11.25V12.75ZM8.25 8.25C7.83579 8.25 7.5 8.58579 7.5 9C7.5 9.41421 7.83579 9.75 8.25 9.75V8.25ZM9 5.25C8.58579 5.25 8.25 5.58579 8.25 6C8.25 6.41421 8.58579 6.75 9 6.75V5.25ZM9.0075 6.75C9.42171 6.75 9.7575 6.41421 9.7575 6C9.7575 5.58579 9.42171 5.25 9.0075 5.25V6.75ZM8.25 9V12H9.75V9H8.25ZM9 12.75H9.75V11.25H9V12.75ZM9 8.25H8.25V9.75H9V8.25ZM15 9C15 12.3137 12.3137 15 9 15V16.5C13.1421 16.5 16.5 13.1421 16.5 9H15ZM9 15C5.68629 15 3 12.3137 3 9H1.5C1.5 13.1421 4.85786 16.5 9 16.5V15ZM3 9C3 5.68629 5.68629 3 9 3V1.5C4.85786 1.5 1.5 4.85786 1.5 9H3ZM9 3C12.3137 3 15 5.68629 15 9H16.5C16.5 4.85786 13.1421 1.5 9 1.5V3ZM9 6.75H9.0075V5.25H9V6.75Z'
                          fill='#B8C1CC'
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full sm:w-1/2 lg:w-1/5 p-2'>
                <div className='px-5 py-3 h-full bg-white rounded-lg'>
                  <div className='flex flex-wrap justify-between -m-2'>
                    <div className='w-auto p-2'>
                      <p className='mb-4 text-sm text-neutral-500 font-medium'>
                        Net Payments
                      </p>
                      <h3 className='font-heading text-3xl font-semibold'>
                        $180,620
                      </h3>
                    </div>
                    <div className='w-auto p-2'>
                      <svg
                        width={18}
                        height={18}
                        viewBox='0 0 18 18'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M9 9H9.75C9.75 8.58579 9.41421 8.25 9 8.25V9ZM9 12H8.25C8.25 12.4142 8.58579 12.75 9 12.75V12ZM9.75 12.75C10.1642 12.75 10.5 12.4142 10.5 12C10.5 11.5858 10.1642 11.25 9.75 11.25V12.75ZM8.25 8.25C7.83579 8.25 7.5 8.58579 7.5 9C7.5 9.41421 7.83579 9.75 8.25 9.75V8.25ZM9 5.25C8.58579 5.25 8.25 5.58579 8.25 6C8.25 6.41421 8.58579 6.75 9 6.75V5.25ZM9.0075 6.75C9.42171 6.75 9.7575 6.41421 9.7575 6C9.7575 5.58579 9.42171 5.25 9.0075 5.25V6.75ZM8.25 9V12H9.75V9H8.25ZM9 12.75H9.75V11.25H9V12.75ZM9 8.25H8.25V9.75H9V8.25ZM15 9C15 12.3137 12.3137 15 9 15V16.5C13.1421 16.5 16.5 13.1421 16.5 9H15ZM9 15C5.68629 15 3 12.3137 3 9H1.5C1.5 13.1421 4.85786 16.5 9 16.5V15ZM3 9C3 5.68629 5.68629 3 9 3V1.5C4.85786 1.5 1.5 4.85786 1.5 9H3ZM9 3C12.3137 3 15 5.68629 15 9H16.5C16.5 4.85786 13.1421 1.5 9 1.5V3ZM9 6.75H9.0075V5.25H9V6.75Z'
                          fill='#B8C1CC'
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full sm:w-1/2 lg:w-1/5 p-2'>
                <div className='px-5 py-3 h-full bg-white rounded-lg'>
                  <div className='flex flex-wrap justify-between -m-2'>
                    <div className='w-auto p-2'>
                      <p className='mb-4 text-sm text-neutral-500 font-medium'>
                        Unpaid Invoices
                      </p>
                      <h3 className='font-heading text-3xl font-semibold'>
                        <span>92 </span>
                        <span className='text-sm text-neutral-500 font-medium'>
                          $2,340
                        </span>
                      </h3>
                    </div>
                    <div className='w-auto p-2'>
                      <svg
                        width={18}
                        height={18}
                        viewBox='0 0 18 18'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M9 9H9.75C9.75 8.58579 9.41421 8.25 9 8.25V9ZM9 12H8.25C8.25 12.4142 8.58579 12.75 9 12.75V12ZM9.75 12.75C10.1642 12.75 10.5 12.4142 10.5 12C10.5 11.5858 10.1642 11.25 9.75 11.25V12.75ZM8.25 8.25C7.83579 8.25 7.5 8.58579 7.5 9C7.5 9.41421 7.83579 9.75 8.25 9.75V8.25ZM9 5.25C8.58579 5.25 8.25 5.58579 8.25 6C8.25 6.41421 8.58579 6.75 9 6.75V5.25ZM9.0075 6.75C9.42171 6.75 9.7575 6.41421 9.7575 6C9.7575 5.58579 9.42171 5.25 9.0075 5.25V6.75ZM8.25 9V12H9.75V9H8.25ZM9 12.75H9.75V11.25H9V12.75ZM9 8.25H8.25V9.75H9V8.25ZM15 9C15 12.3137 12.3137 15 9 15V16.5C13.1421 16.5 16.5 13.1421 16.5 9H15ZM9 15C5.68629 15 3 12.3137 3 9H1.5C1.5 13.1421 4.85786 16.5 9 16.5V15ZM3 9C3 5.68629 5.68629 3 9 3V1.5C4.85786 1.5 1.5 4.85786 1.5 9H3ZM9 3C12.3137 3 15 5.68629 15 9H16.5C16.5 4.85786 13.1421 1.5 9 1.5V3ZM9 6.75H9.0075V5.25H9V6.75Z'
                          fill='#B8C1CC'
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='py-4 overflow-hidden'>
          <div className='container px-4 mx-auto'>
            <div className='py-5 bg-neutral-50 border border-neutral-100 rounded-xl'>
              <div className='px-6'>
                <h3 className='font-heading pb-8 text-lg text-neutral-600 font-semibold'>
                  Transaction History
                </h3>
                <div className='mb-5 w-full overflow-x-auto'>
                  <table className='w-full min-w-max'>
                    <thead>
                      <tr className='text-left'>
                        <th className='pb-3.5 border-b border-neutral-100'>
                          <a
                            className='inline-flex items-center text-sm text-gray-500 font-medium uppercase'
                            href='#'
                          >
                            <span className='mr-1.5'>Id</span>
                            <svg
                              width={18}
                              height={18}
                              viewBox='0 0 18 18'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                fillRule='evenodd'
                                clipRule='evenodd'
                                d='M4.7636 6.56365C5.11508 6.21218 5.68492 6.21218 6.0364 6.56365L9 9.52726L11.9636 6.56365C12.3151 6.21218 12.8849 6.21218 13.2364 6.56365C13.5879 6.91512 13.5879 7.48497 13.2364 7.83645L9.6364 11.4364C9.28492 11.7879 8.71508 11.7879 8.3636 11.4364L4.7636 7.83645C4.41213 7.48497 4.41213 6.91512 4.7636 6.56365Z'
                                fill='#7F8995'
                              />
                            </svg>
                          </a>
                        </th>
                        <th className='pb-3.5 border-b border-neutral-100'>
                          <a
                            className='inline-flex items-center text-sm text-gray-500 font-medium'
                            href='#'
                          >
                            <span className='mr-1.5'>Name</span>
                            <svg
                              width={18}
                              height={18}
                              viewBox='0 0 18 18'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                fillRule='evenodd'
                                clipRule='evenodd'
                                d='M4.7636 6.56365C5.11508 6.21218 5.68492 6.21218 6.0364 6.56365L9 9.52726L11.9636 6.56365C12.3151 6.21218 12.8849 6.21218 13.2364 6.56365C13.5879 6.91512 13.5879 7.48497 13.2364 7.83645L9.6364 11.4364C9.28492 11.7879 8.71508 11.7879 8.3636 11.4364L4.7636 7.83645C4.41213 7.48497 4.41213 6.91512 4.7636 6.56365Z'
                                fill='#7F8995'
                              />
                            </svg>
                          </a>
                        </th>
                        <th className='pb-3.5 border-b border-neutral-100'>
                          <a
                            className='inline-flex items-center text-sm text-gray-500 font-medium'
                            href='#'
                          >
                            <span className='mr-1.5'>Price</span>
                            <svg
                              width={18}
                              height={18}
                              viewBox='0 0 18 18'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                fillRule='evenodd'
                                clipRule='evenodd'
                                d='M4.7636 6.56365C5.11508 6.21218 5.68492 6.21218 6.0364 6.56365L9 9.52726L11.9636 6.56365C12.3151 6.21218 12.8849 6.21218 13.2364 6.56365C13.5879 6.91512 13.5879 7.48497 13.2364 7.83645L9.6364 11.4364C9.28492 11.7879 8.71508 11.7879 8.3636 11.4364L4.7636 7.83645C4.41213 7.48497 4.41213 6.91512 4.7636 6.56365Z'
                                fill='#7F8995'
                              />
                            </svg>
                          </a>
                        </th>
                        <th className='pb-3.5 border-b border-neutral-100'>
                          <a
                            className='inline-flex items-center text-sm text-gray-500 font-medium'
                            href='#'
                          >
                            <span className='mr-1.5'>Product</span>
                            <svg
                              width={18}
                              height={18}
                              viewBox='0 0 18 18'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                fillRule='evenodd'
                                clipRule='evenodd'
                                d='M4.7636 6.56365C5.11508 6.21218 5.68492 6.21218 6.0364 6.56365L9 9.52726L11.9636 6.56365C12.3151 6.21218 12.8849 6.21218 13.2364 6.56365C13.5879 6.91512 13.5879 7.48497 13.2364 7.83645L9.6364 11.4364C9.28492 11.7879 8.71508 11.7879 8.3636 11.4364L4.7636 7.83645C4.41213 7.48497 4.41213 6.91512 4.7636 6.56365Z'
                                fill='#7F8995'
                              />
                            </svg>
                          </a>
                        </th>
                        <th className='pb-3.5 border-b border-neutral-100'>
                          <a
                            className='inline-flex items-center text-sm text-gray-500 font-medium'
                            href='#'
                          >
                            <span className='mr-1.5'>Purchase Time</span>
                            <svg
                              width={18}
                              height={18}
                              viewBox='0 0 18 18'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                fillRule='evenodd'
                                clipRule='evenodd'
                                d='M4.7636 6.56365C5.11508 6.21218 5.68492 6.21218 6.0364 6.56365L9 9.52726L11.9636 6.56365C12.3151 6.21218 12.8849 6.21218 13.2364 6.56365C13.5879 6.91512 13.5879 7.48497 13.2364 7.83645L9.6364 11.4364C9.28492 11.7879 8.71508 11.7879 8.3636 11.4364L4.7636 7.83645C4.41213 7.48497 4.41213 6.91512 4.7636 6.56365Z'
                                fill='#7F8995'
                              />
                            </svg>
                          </a>
                        </th>
                        <th className='pb-3.5 border-b border-neutral-100'>
                          <a
                            className='inline-flex items-center text-sm text-gray-500 font-medium'
                            href='#'
                          >
                            <span className='mr-1.5'>Status</span>
                            <svg
                              width={18}
                              height={18}
                              viewBox='0 0 18 18'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                fillRule='evenodd'
                                clipRule='evenodd'
                                d='M4.7636 6.56365C5.11508 6.21218 5.68492 6.21218 6.0364 6.56365L9 9.52726L11.9636 6.56365C12.3151 6.21218 12.8849 6.21218 13.2364 6.56365C13.5879 6.91512 13.5879 7.48497 13.2364 7.83645L9.6364 11.4364C9.28492 11.7879 8.71508 11.7879 8.3636 11.4364L4.7636 7.83645C4.41213 7.48497 4.41213 6.91512 4.7636 6.56365Z'
                                fill='#7F8995'
                              />
                            </svg>
                          </a>
                        </th>
                        <th className='pb-3.5 border-b border-neutral-100' />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className='py-2.5 pr-4 border-b border-neutral-100'>
                          <span className='font-medium'>29506</span>
                        </td>
                        <td className='py-2.5 pr-4 border-b border-neutral-100'>
                          <div className='flex flex-wrap items-center'>
                            <img
                              className='mr-3 h-9'
                              src='../assets/dashy-assets/images/avatar5.png'
                              alt=''
                            />
                            <span className='font-semibold'>
                              Darrell Steward
                            </span>
                          </div>
                        </td>
                        <td className='py-2.5 pr-4 border-b border-neutral-100'>
                          <span className='font-medium'>$17.84</span>
                        </td>
                        <td className='py-2.5 pr-4 border-b border-neutral-100'>
                          <span className='font-medium'>
                            Playstation 4 Limited Edition
                          </span>
                        </td>
                        <td className='py-2.5 pr-4 border-b border-neutral-100'>
                          <span className='text-neutral-500 font-medium'>
                            15 May 2020 9:00 pm
                          </span>
                        </td>
                        <td className='py-2.5 pr-4 border-b border-neutral-100'>
                          <span className='px-2.5 py-1 text-sm font-medium text-green-500 bg-green-500 bg-opacity-10 rounded-full'>
                            Confirmed
                          </span>
                        </td>
                        <td className='py-2.5 border-b border-neutral-100'>
                          <a className='inline-flex py-2.5 pr-0' href='#'>
                            <span className='w-1 h-1 bg-neutral-200 rounded-full' />
                            <span className='mx-0.5 w-1 h-1 bg-neutral-200 rounded-full' />
                            <span className='w-1 h-1 bg-neutral-200 rounded-full' />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className='py-2.5 pr-4 border-b border-neutral-100'>
                          <span className='font-medium'>29506</span>
                        </td>
                        <td className='py-2.5 pr-4 border-b border-neutral-100'>
                          <div className='flex flex-wrap items-center'>
                            <img
                              className='mr-3 h-9'
                              src='../assets/dashy-assets/images/avatar6.png'
                              alt=''
                            />
                            <span className='font-semibold'>Bessie Cooper</span>
                          </div>
                        </td>
                        <td className='py-2.5 pr-4 border-b border-neutral-100'>
                          <span className='font-medium'>$17.84</span>
                        </td>
                        <td className='py-2.5 pr-4 border-b border-neutral-100'>
                          <span className='font-medium'>Gopro Hero 7</span>
                        </td>
                        <td className='py-2.5 pr-4 border-b border-neutral-100'>
                          <span className='text-neutral-500 font-medium'>
                            15 May 2020 8:00 pm
                          </span>
                        </td>
                        <td className='py-2.5 pr-4 border-b border-neutral-100'>
                          <span className='px-2.5 py-1 text-sm font-medium text-red-500 bg-red-500 bg-opacity-10 rounded-full'>
                            Canceled
                          </span>
                        </td>
                        <td className='py-2.5 border-b border-neutral-100'>
                          <a className='inline-flex py-2.5 pr-0' href='#'>
                            <span className='w-1 h-1 bg-neutral-200 rounded-full' />
                            <span className='mx-0.5 w-1 h-1 bg-neutral-200 rounded-full' />
                            <span className='w-1 h-1 bg-neutral-200 rounded-full' />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className='py-2.5 pr-4 border-b border-neutral-100'>
                          <span className='font-medium'>29506</span>
                        </td>
                        <td className='py-2.5 pr-4 border-b border-neutral-100'>
                          <div className='flex flex-wrap items-center'>
                            <img
                              className='mr-3 h-9'
                              src='../assets/dashy-assets/images/avatar7.png'
                              alt=''
                            />
                            <span className='font-semibold'>Annette Black</span>
                          </div>
                        </td>
                        <td className='py-2.5 pr-4 border-b border-neutral-100'>
                          <span className='font-medium'>$6.48</span>
                        </td>
                        <td className='py-2.5 pr-4 border-b border-neutral-100'>
                          <span className='font-medium'>DJI Mavic Pro 2</span>
                        </td>
                        <td className='py-2.5 pr-4 border-b border-neutral-100'>
                          <span className='text-neutral-500 font-medium'>
                            15 May 2020 7:00 pm
                          </span>
                        </td>
                        <td className='py-2.5 pr-4 border-b border-neutral-100'>
                          <span className='px-2.5 py-1 text-sm font-medium text-green-500 bg-green-500 bg-opacity-10 rounded-full'>
                            Confirmed
                          </span>
                        </td>
                        <td className='py-2.5 border-b border-neutral-100'>
                          <a className='inline-flex py-2.5 pr-0' href='#'>
                            <span className='w-1 h-1 bg-neutral-200 rounded-full' />
                            <span className='mx-0.5 w-1 h-1 bg-neutral-200 rounded-full' />
                            <span className='w-1 h-1 bg-neutral-200 rounded-full' />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className='py-2.5 pr-4 border-b border-neutral-100'>
                          <span className='font-medium'>29506</span>
                        </td>
                        <td className='py-2.5 pr-4 border-b border-neutral-100'>
                          <div className='flex flex-wrap items-center pl-12'>
                            <span className='font-semibold'>
                              Darlene Robertson
                            </span>
                          </div>
                        </td>
                        <td className='py-2.5 pr-4 border-b border-neutral-100'>
                          <span className='font-medium'>$14.81</span>
                        </td>
                        <td className='py-2.5 pr-4 border-b border-neutral-100'>
                          <span className='font-medium'>Brand New Bike</span>
                        </td>
                        <td className='py-2.5 pr-4 border-b border-neutral-100'>
                          <span className='text-neutral-500 font-medium'>
                            15 May 2020 6:00 pm
                          </span>
                        </td>
                        <td className='py-2.5 pr-4 border-b border-neutral-100'>
                          <span className='px-2.5 py-1 text-sm font-medium text-green-500 bg-green-500 bg-opacity-10 rounded-full'>
                            Confirmed
                          </span>
                        </td>
                        <td className='py-2.5 border-b border-neutral-100'>
                          <a className='inline-flex py-2.5 pr-0' href='#'>
                            <span className='w-1 h-1 bg-neutral-200 rounded-full' />
                            <span className='mx-0.5 w-1 h-1 bg-neutral-200 rounded-full' />
                            <span className='w-1 h-1 bg-neutral-200 rounded-full' />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className='py-2.5 pr-4 border-b border-neutral-100'>
                          <span className='font-medium'>29506</span>
                        </td>
                        <td className='py-2.5 pr-4 border-b border-neutral-100'>
                          <div className='flex flex-wrap items-center'>
                            <img
                              className='mr-3 h-9'
                              src='../assets/dashy-assets/images/avatar8.png'
                              alt=''
                            />
                            <span className='font-semibold'>Jane Cooper</span>
                          </div>
                        </td>
                        <td className='py-2.5 pr-4 border-b border-neutral-100'>
                          <span className='font-medium'>$8.99</span>
                        </td>
                        <td className='py-2.5 pr-4 border-b border-neutral-100'>
                          <span className='font-medium'>Coach Tabby 26</span>
                        </td>
                        <td className='py-2.5 pr-4 border-b border-neutral-100'>
                          <span className='text-neutral-500 font-medium'>
                            15 May 2020 11:00 pm
                          </span>
                        </td>
                        <td className='py-2.5 pr-4 border-b border-neutral-100'>
                          <span className='px-2.5 py-1 text-sm font-medium text-yellow-500 bg-yellow-500 bg-opacity-10 rounded-full'>
                            Pending
                          </span>
                        </td>
                        <td className='py-2.5 border-b border-neutral-100'>
                          <a className='inline-flex py-2.5 pr-0' href='#'>
                            <span className='w-1 h-1 bg-neutral-200 rounded-full' />
                            <span className='mx-0.5 w-1 h-1 bg-neutral-200 rounded-full' />
                            <span className='w-1 h-1 bg-neutral-200 rounded-full' />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className='py-2.5 pr-4 border-b border-neutral-100'>
                          <span className='font-medium'>29506</span>
                        </td>
                        <td className='py-2.5 pr-4 border-b border-neutral-100'>
                          <div className='flex flex-wrap items-center'>
                            <img
                              className='mr-3 h-9'
                              src='../assets/dashy-assets/images/avatar9.png'
                              alt=''
                            />
                            <span className='font-semibold'>
                              Cameron Williamson
                            </span>
                          </div>
                        </td>
                        <td className='py-2.5 pr-4 border-b border-neutral-100'>
                          <span className='font-medium'>$17.84</span>
                        </td>
                        <td className='py-2.5 pr-4 border-b border-neutral-100'>
                          <span className='font-medium'>
                            Dell Computer Monitor
                          </span>
                        </td>
                        <td className='py-2.5 pr-4 border-b border-neutral-100'>
                          <span className='text-neutral-500 font-medium'>
                            15 May 2020 5:00 pm
                          </span>
                        </td>
                        <td className='py-2.5 pr-4 border-b border-neutral-100'>
                          <span className='px-2.5 py-1 text-sm font-medium text-green-500 bg-green-500 bg-opacity-10 rounded-full'>
                            Confirmed
                          </span>
                        </td>
                        <td className='py-2.5 border-b border-neutral-100'>
                          <a className='inline-flex py-2.5 pr-0' href='#'>
                            <span className='w-1 h-1 bg-neutral-200 rounded-full' />
                            <span className='mx-0.5 w-1 h-1 bg-neutral-200 rounded-full' />
                            <span className='w-1 h-1 bg-neutral-200 rounded-full' />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className='py-2.5 pr-4'>
                          <span className='font-medium'>29506</span>
                        </td>
                        <td className='py-2.5 pr-4'>
                          <div className='flex flex-wrap items-center'>
                            <img
                              className='mr-3 h-9'
                              src='../assets/dashy-assets/images/avatar10.png'
                              alt=''
                            />
                            <span className='font-semibold'>Esther Howard</span>
                          </div>
                        </td>
                        <td className='py-2.5 pr-4'>
                          <span className='font-medium'>$5.22</span>
                        </td>
                        <td className='py-2.5 pr-4'>
                          <span className='font-medium'>
                            iPad Pro 2017 Model
                          </span>
                        </td>
                        <td className='py-2.5 pr-4'>
                          <span className='text-neutral-500 font-medium'>
                            15 May 2020 10:00 pm
                          </span>
                        </td>
                        <td className='py-2.5 pr-4'>
                          <span className='px-2.5 py-1 text-sm font-medium text-green-500 bg-green-500 bg-opacity-10 rounded-full'>
                            Confirmed
                          </span>
                        </td>
                        <td className='py-2.5'>
                          <a className='inline-flex py-2.5 pr-0' href='#'>
                            <span className='w-1 h-1 bg-neutral-200 rounded-full' />
                            <span className='mx-0.5 w-1 h-1 bg-neutral-200 rounded-full' />
                            <span className='w-1 h-1 bg-neutral-200 rounded-full' />
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className='flex flex-wrap items-center justify-between -m-2'>
                  <div className='w-auto p-2'>
                    <div className='flex flex-wrap -m-0.5'>
                      <div className='w-auto p-0.5'>
                        <a
                          className='flex items-center justify-center w-9 h-9 border hover:border-neutral-300 rounded-sm'
                          href='#'
                        >
                          <svg
                            width={7}
                            height={12}
                            viewBox='0 0 7 12'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M6 10.6666L1.33333 5.99998L6 1.33331'
                              stroke='#71717A'
                              strokeWidth='1.5'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                          </svg>
                        </a>
                      </div>
                      <div className='w-auto p-0.5'>
                        <a
                          className='flex items-center justify-center w-9 h-9 border hover:border-neutral-300 rounded-sm'
                          href='#'
                        >
                          <span className='text-sm text-neutral-400 font-semibold'>
                            1
                          </span>
                        </a>
                      </div>
                      <div className='w-auto p-0.5'>
                        <a
                          className='flex items-center justify-center w-9 h-9 border border-neutral-600 rounded-sm'
                          href='#'
                        >
                          <span className='text-sm font-semibold'>2</span>
                        </a>
                      </div>
                      <div className='w-auto p-0.5'>
                        <a
                          className='flex items-center justify-center w-9 h-9 border hover:border-neutral-300 rounded-sm'
                          href='#'
                        >
                          <span className='text-sm text-neutral-400 font-semibold'>
                            3
                          </span>
                        </a>
                      </div>
                      <div className='w-auto p-0.5'>
                        <a
                          className='flex items-center justify-center w-9 h-9 border hover:border-neutral-300 rounded-sm'
                          href='#'
                        >
                          <span className='text-sm text-neutral-400 font-semibold'>
                            4
                          </span>
                        </a>
                      </div>
                      <div className='w-auto p-0.5'>
                        <a
                          className='flex items-center justify-center w-9 h-9 border hover:border-neutral-300 rounded-sm'
                          href='#'
                        >
                          <svg
                            width={7}
                            height={12}
                            viewBox='0 0 7 12'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M1 1.33335L5.66667 6.00002L1 10.6667'
                              stroke='#71717A'
                              strokeWidth='1.5'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                          </svg>
                        </a>
                      </div>
                      <div className='w-auto p-0.5'>
                        <a
                          className='flex items-center justify-center w-9 h-9 border hover:border-neutral-300 rounded-sm'
                          href='#'
                        >
                          <svg
                            width={7}
                            height={12}
                            viewBox='0 0 7 12'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M1 1.33335L5.66667 6.00002L1 10.6667'
                              stroke='#71717A'
                              strokeWidth='1.5'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                          </svg>
                          <svg
                            width={7}
                            height={12}
                            viewBox='0 0 7 12'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M1 1.33335L5.66667 6.00002L1 10.6667'
                              stroke='#71717A'
                              strokeWidth='1.5'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='w-auto p-2'>
                    <p className='text-sm text-neutral-400'>
                      Showing 1 of 20 out of 157 results
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='py-4 overflow-hidden'>
          <div className='container px-4 mx-auto'>
            <div className='flex flex-wrap -m-3'>
              <div className='w-full sm:w-1/2 md:w-1/3 p-3'>
                <div className='text-center bg-white border rounded-xl'>
                  <div className='p-5 pb-9'>
                    <img
                      className='h-16 mx-auto mb-3.5'
                      src='../assets/dashy-assets/images/avatar31.png'
                      alt=''
                    />
                    <h3 className='font-semibold text-sm'>Jenny Wilson</h3>
                    <p className='text-xs text-neutral-500'>Co-Founder</p>
                  </div>
                  <div className='flex flex-wrap border-t divide-x'>
                    <div className='w-full sm:w-1/2'>
                      <a
                        className='flex items-center justify-center py-3'
                        href='#'
                      >
                        <svg
                          className='mr-3'
                          width={14}
                          height={12}
                          viewBox='0 0 14 12'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M1.66603 2.70934C1.32138 2.47957 0.855727 2.5727 0.625962 2.91735C0.396198 3.262 0.489328 3.72765 0.833975 3.95741L1.66603 2.70934ZM6.5104 6.84031L6.09437 7.46434H6.09438L6.5104 6.84031ZM7.9896 6.84031L7.57358 6.21627V6.21627L7.9896 6.84031ZM13.666 3.95741C14.0107 3.72765 14.1038 3.262 13.874 2.91735C13.6443 2.5727 13.1786 2.47957 12.834 2.70934L13.666 3.95741ZM2.58333 2.08337H11.9167V0.583374H2.58333V2.08337ZM12.5 2.66671V9.33337H14V2.66671H12.5ZM11.9167 9.91671H2.58333V11.4167H11.9167V9.91671ZM2 9.33337V2.66671H0.5V9.33337H2ZM2.58333 9.91671C2.26117 9.91671 2 9.65554 2 9.33337H0.5C0.5 10.484 1.43274 11.4167 2.58333 11.4167V9.91671ZM12.5 9.33337C12.5 9.65554 12.2388 9.91671 11.9167 9.91671V11.4167C13.0673 11.4167 14 10.484 14 9.33337H12.5ZM11.9167 2.08337C12.2388 2.08337 12.5 2.34454 12.5 2.66671H14C14 1.51611 13.0673 0.583374 11.9167 0.583374V2.08337ZM2.58333 0.583374C1.43274 0.583374 0.5 1.51611 0.5 2.66671H2C2 2.34454 2.26117 2.08337 2.58333 2.08337V0.583374ZM0.833975 3.95741L6.09437 7.46434L6.92642 6.21627L1.66603 2.70934L0.833975 3.95741ZM8.40563 7.46434L13.666 3.95741L12.834 2.70934L7.57358 6.21627L8.40563 7.46434ZM6.09438 7.46434C6.79417 7.93087 7.70584 7.93087 8.40563 7.46434L7.57358 6.21627C7.37763 6.3469 7.12237 6.3469 6.92642 6.21627L6.09438 7.46434Z'
                            fill='#B8C1CC'
                          />
                        </svg>
                        <span className='text-xs font-medium hover:text-neutral-700'>
                          Email
                        </span>
                      </a>
                    </div>
                    <div className='w-full sm:w-1/2'>
                      <a
                        className='flex items-center justify-center py-3'
                        href='#'
                      >
                        <svg
                          className='mr-3'
                          width={17}
                          height={16}
                          viewBox='0 0 17 16'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M2.25 3.33333C2.25 2.59695 2.84695 2 3.58333 2H5.76949C6.05645 2 6.31121 2.18362 6.40195 2.45585L7.40049 5.45147C7.50541 5.76622 7.36292 6.11021 7.06618 6.25858L5.56134 7.011C6.29617 8.64081 7.60919 9.95383 9.239 10.6887L9.99142 9.18382C10.1398 8.88708 10.4838 8.74459 10.7985 8.84951L13.7942 9.84805C14.0664 9.93879 14.25 10.1936 14.25 10.4805V12.6667C14.25 13.403 13.653 14 12.9167 14H12.25C6.72715 14 2.25 9.52285 2.25 4V3.33333Z'
                            stroke='#B8C1CC'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                        <span className='text-xs font-medium hover:text-neutral-700'>
                          Call
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full sm:w-1/2 md:w-1/3 p-3'>
                <div className='text-center bg-white border rounded-xl'>
                  <div className='p-5 pb-9'>
                    <img
                      className='h-16 mx-auto mb-3.5'
                      src='../assets/dashy-assets/images/avatar32.png'
                      alt=''
                    />
                    <h3 className='font-semibold text-sm'>Darrell Steward</h3>
                    <p className='text-xs text-neutral-500'>Product Designer</p>
                  </div>
                  <div className='flex flex-wrap border-t divide-x'>
                    <div className='w-full sm:w-1/2'>
                      <a
                        className='flex items-center justify-center py-3'
                        href='#'
                      >
                        <svg
                          className='mr-3'
                          width={14}
                          height={12}
                          viewBox='0 0 14 12'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M1.66603 2.70934C1.32138 2.47957 0.855727 2.5727 0.625962 2.91735C0.396198 3.262 0.489328 3.72765 0.833975 3.95741L1.66603 2.70934ZM6.5104 6.84031L6.09437 7.46434H6.09438L6.5104 6.84031ZM7.9896 6.84031L7.57358 6.21627V6.21627L7.9896 6.84031ZM13.666 3.95741C14.0107 3.72765 14.1038 3.262 13.874 2.91735C13.6443 2.5727 13.1786 2.47957 12.834 2.70934L13.666 3.95741ZM2.58333 2.08337H11.9167V0.583374H2.58333V2.08337ZM12.5 2.66671V9.33337H14V2.66671H12.5ZM11.9167 9.91671H2.58333V11.4167H11.9167V9.91671ZM2 9.33337V2.66671H0.5V9.33337H2ZM2.58333 9.91671C2.26117 9.91671 2 9.65554 2 9.33337H0.5C0.5 10.484 1.43274 11.4167 2.58333 11.4167V9.91671ZM12.5 9.33337C12.5 9.65554 12.2388 9.91671 11.9167 9.91671V11.4167C13.0673 11.4167 14 10.484 14 9.33337H12.5ZM11.9167 2.08337C12.2388 2.08337 12.5 2.34454 12.5 2.66671H14C14 1.51611 13.0673 0.583374 11.9167 0.583374V2.08337ZM2.58333 0.583374C1.43274 0.583374 0.5 1.51611 0.5 2.66671H2C2 2.34454 2.26117 2.08337 2.58333 2.08337V0.583374ZM0.833975 3.95741L6.09437 7.46434L6.92642 6.21627L1.66603 2.70934L0.833975 3.95741ZM8.40563 7.46434L13.666 3.95741L12.834 2.70934L7.57358 6.21627L8.40563 7.46434ZM6.09438 7.46434C6.79417 7.93087 7.70584 7.93087 8.40563 7.46434L7.57358 6.21627C7.37763 6.3469 7.12237 6.3469 6.92642 6.21627L6.09438 7.46434Z'
                            fill='#B8C1CC'
                          />
                        </svg>
                        <span className='text-xs font-medium hover:text-neutral-700'>
                          Email
                        </span>
                      </a>
                    </div>
                    <div className='w-full sm:w-1/2'>
                      <a
                        className='flex items-center justify-center py-3'
                        href='#'
                      >
                        <svg
                          className='mr-3'
                          width={17}
                          height={16}
                          viewBox='0 0 17 16'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M2.25 3.33333C2.25 2.59695 2.84695 2 3.58333 2H5.76949C6.05645 2 6.31121 2.18362 6.40195 2.45585L7.40049 5.45147C7.50541 5.76622 7.36292 6.11021 7.06618 6.25858L5.56134 7.011C6.29617 8.64081 7.60919 9.95383 9.239 10.6887L9.99142 9.18382C10.1398 8.88708 10.4838 8.74459 10.7985 8.84951L13.7942 9.84805C14.0664 9.93879 14.25 10.1936 14.25 10.4805V12.6667C14.25 13.403 13.653 14 12.9167 14H12.25C6.72715 14 2.25 9.52285 2.25 4V3.33333Z'
                            stroke='#B8C1CC'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                        <span className='text-xs font-medium hover:text-neutral-700'>
                          Call
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full sm:w-1/2 md:w-1/3 p-3'>
                <div className='text-center bg-white border rounded-xl'>
                  <div className='p-5 pb-9'>
                    <img
                      className='h-16 mx-auto mb-3.5'
                      src='../assets/dashy-assets/images/avatar33.png'
                      alt=''
                    />
                    <h3 className='font-semibold text-sm'>Jerome Bell</h3>
                    <p className='text-xs text-neutral-500'>
                      Full-Stack Developer
                    </p>
                  </div>
                  <div className='flex flex-wrap border-t divide-x'>
                    <div className='w-full sm:w-1/2'>
                      <a
                        className='flex items-center justify-center py-3'
                        href='#'
                      >
                        <svg
                          className='mr-3'
                          width={14}
                          height={12}
                          viewBox='0 0 14 12'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M1.66603 2.70934C1.32138 2.47957 0.855727 2.5727 0.625962 2.91735C0.396198 3.262 0.489328 3.72765 0.833975 3.95741L1.66603 2.70934ZM6.5104 6.84031L6.09437 7.46434H6.09438L6.5104 6.84031ZM7.9896 6.84031L7.57358 6.21627V6.21627L7.9896 6.84031ZM13.666 3.95741C14.0107 3.72765 14.1038 3.262 13.874 2.91735C13.6443 2.5727 13.1786 2.47957 12.834 2.70934L13.666 3.95741ZM2.58333 2.08337H11.9167V0.583374H2.58333V2.08337ZM12.5 2.66671V9.33337H14V2.66671H12.5ZM11.9167 9.91671H2.58333V11.4167H11.9167V9.91671ZM2 9.33337V2.66671H0.5V9.33337H2ZM2.58333 9.91671C2.26117 9.91671 2 9.65554 2 9.33337H0.5C0.5 10.484 1.43274 11.4167 2.58333 11.4167V9.91671ZM12.5 9.33337C12.5 9.65554 12.2388 9.91671 11.9167 9.91671V11.4167C13.0673 11.4167 14 10.484 14 9.33337H12.5ZM11.9167 2.08337C12.2388 2.08337 12.5 2.34454 12.5 2.66671H14C14 1.51611 13.0673 0.583374 11.9167 0.583374V2.08337ZM2.58333 0.583374C1.43274 0.583374 0.5 1.51611 0.5 2.66671H2C2 2.34454 2.26117 2.08337 2.58333 2.08337V0.583374ZM0.833975 3.95741L6.09437 7.46434L6.92642 6.21627L1.66603 2.70934L0.833975 3.95741ZM8.40563 7.46434L13.666 3.95741L12.834 2.70934L7.57358 6.21627L8.40563 7.46434ZM6.09438 7.46434C6.79417 7.93087 7.70584 7.93087 8.40563 7.46434L7.57358 6.21627C7.37763 6.3469 7.12237 6.3469 6.92642 6.21627L6.09438 7.46434Z'
                            fill='#B8C1CC'
                          />
                        </svg>
                        <span className='text-xs font-medium hover:text-neutral-700'>
                          Email
                        </span>
                      </a>
                    </div>
                    <div className='w-full sm:w-1/2'>
                      <a
                        className='flex items-center justify-center py-3'
                        href='#'
                      >
                        <svg
                          className='mr-3'
                          width={17}
                          height={16}
                          viewBox='0 0 17 16'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M2.25 3.33333C2.25 2.59695 2.84695 2 3.58333 2H5.76949C6.05645 2 6.31121 2.18362 6.40195 2.45585L7.40049 5.45147C7.50541 5.76622 7.36292 6.11021 7.06618 6.25858L5.56134 7.011C6.29617 8.64081 7.60919 9.95383 9.239 10.6887L9.99142 9.18382C10.1398 8.88708 10.4838 8.74459 10.7985 8.84951L13.7942 9.84805C14.0664 9.93879 14.25 10.1936 14.25 10.4805V12.6667C14.25 13.403 13.653 14 12.9167 14H12.25C6.72715 14 2.25 9.52285 2.25 4V3.33333Z'
                            stroke='#B8C1CC'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                        <span className='text-xs font-medium hover:text-neutral-700'>
                          Call
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full sm:w-1/2 md:w-1/3 p-3'>
                <div className='text-center bg-white border rounded-xl'>
                  <div className='p-5 pb-9'>
                    <img
                      className='h-16 mx-auto mb-3.5'
                      src='../assets/dashy-assets/images/avatar34.png'
                      alt=''
                    />
                    <h3 className='font-semibold text-sm'>Marvin McKinney</h3>
                    <p className='text-xs text-neutral-500'>
                      Head of Customer Relation
                    </p>
                  </div>
                  <div className='flex flex-wrap border-t divide-x'>
                    <div className='w-full sm:w-1/2'>
                      <a
                        className='flex items-center justify-center py-3'
                        href='#'
                      >
                        <svg
                          className='mr-3'
                          width={14}
                          height={12}
                          viewBox='0 0 14 12'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M1.66603 2.70934C1.32138 2.47957 0.855727 2.5727 0.625962 2.91735C0.396198 3.262 0.489328 3.72765 0.833975 3.95741L1.66603 2.70934ZM6.5104 6.84031L6.09437 7.46434H6.09438L6.5104 6.84031ZM7.9896 6.84031L7.57358 6.21627V6.21627L7.9896 6.84031ZM13.666 3.95741C14.0107 3.72765 14.1038 3.262 13.874 2.91735C13.6443 2.5727 13.1786 2.47957 12.834 2.70934L13.666 3.95741ZM2.58333 2.08337H11.9167V0.583374H2.58333V2.08337ZM12.5 2.66671V9.33337H14V2.66671H12.5ZM11.9167 9.91671H2.58333V11.4167H11.9167V9.91671ZM2 9.33337V2.66671H0.5V9.33337H2ZM2.58333 9.91671C2.26117 9.91671 2 9.65554 2 9.33337H0.5C0.5 10.484 1.43274 11.4167 2.58333 11.4167V9.91671ZM12.5 9.33337C12.5 9.65554 12.2388 9.91671 11.9167 9.91671V11.4167C13.0673 11.4167 14 10.484 14 9.33337H12.5ZM11.9167 2.08337C12.2388 2.08337 12.5 2.34454 12.5 2.66671H14C14 1.51611 13.0673 0.583374 11.9167 0.583374V2.08337ZM2.58333 0.583374C1.43274 0.583374 0.5 1.51611 0.5 2.66671H2C2 2.34454 2.26117 2.08337 2.58333 2.08337V0.583374ZM0.833975 3.95741L6.09437 7.46434L6.92642 6.21627L1.66603 2.70934L0.833975 3.95741ZM8.40563 7.46434L13.666 3.95741L12.834 2.70934L7.57358 6.21627L8.40563 7.46434ZM6.09438 7.46434C6.79417 7.93087 7.70584 7.93087 8.40563 7.46434L7.57358 6.21627C7.37763 6.3469 7.12237 6.3469 6.92642 6.21627L6.09438 7.46434Z'
                            fill='#B8C1CC'
                          />
                        </svg>
                        <span className='text-xs font-medium hover:text-neutral-700'>
                          Email
                        </span>
                      </a>
                    </div>
                    <div className='w-full sm:w-1/2'>
                      <a
                        className='flex items-center justify-center py-3'
                        href='#'
                      >
                        <svg
                          className='mr-3'
                          width={17}
                          height={16}
                          viewBox='0 0 17 16'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M2.25 3.33333C2.25 2.59695 2.84695 2 3.58333 2H5.76949C6.05645 2 6.31121 2.18362 6.40195 2.45585L7.40049 5.45147C7.50541 5.76622 7.36292 6.11021 7.06618 6.25858L5.56134 7.011C6.29617 8.64081 7.60919 9.95383 9.239 10.6887L9.99142 9.18382C10.1398 8.88708 10.4838 8.74459 10.7985 8.84951L13.7942 9.84805C14.0664 9.93879 14.25 10.1936 14.25 10.4805V12.6667C14.25 13.403 13.653 14 12.9167 14H12.25C6.72715 14 2.25 9.52285 2.25 4V3.33333Z'
                            stroke='#B8C1CC'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                        <span className='text-xs font-medium hover:text-neutral-700'>
                          Call
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full sm:w-1/2 md:w-1/3 p-3'>
                <div className='text-center bg-white border rounded-xl'>
                  <div className='p-5 pb-9'>
                    <img
                      className='h-16 mx-auto mb-3.5'
                      src='../assets/dashy-assets/images/avatar35.png'
                      alt=''
                    />
                    <h3 className='font-semibold text-sm'>Eleanor Pena</h3>
                    <p className='text-xs text-neutral-500'>
                      Chief Marketing Officer
                    </p>
                  </div>
                  <div className='flex flex-wrap border-t divide-x'>
                    <div className='w-full sm:w-1/2'>
                      <a
                        className='flex items-center justify-center py-3'
                        href='#'
                      >
                        <svg
                          className='mr-3'
                          width={14}
                          height={12}
                          viewBox='0 0 14 12'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M1.66603 2.70934C1.32138 2.47957 0.855727 2.5727 0.625962 2.91735C0.396198 3.262 0.489328 3.72765 0.833975 3.95741L1.66603 2.70934ZM6.5104 6.84031L6.09437 7.46434H6.09438L6.5104 6.84031ZM7.9896 6.84031L7.57358 6.21627V6.21627L7.9896 6.84031ZM13.666 3.95741C14.0107 3.72765 14.1038 3.262 13.874 2.91735C13.6443 2.5727 13.1786 2.47957 12.834 2.70934L13.666 3.95741ZM2.58333 2.08337H11.9167V0.583374H2.58333V2.08337ZM12.5 2.66671V9.33337H14V2.66671H12.5ZM11.9167 9.91671H2.58333V11.4167H11.9167V9.91671ZM2 9.33337V2.66671H0.5V9.33337H2ZM2.58333 9.91671C2.26117 9.91671 2 9.65554 2 9.33337H0.5C0.5 10.484 1.43274 11.4167 2.58333 11.4167V9.91671ZM12.5 9.33337C12.5 9.65554 12.2388 9.91671 11.9167 9.91671V11.4167C13.0673 11.4167 14 10.484 14 9.33337H12.5ZM11.9167 2.08337C12.2388 2.08337 12.5 2.34454 12.5 2.66671H14C14 1.51611 13.0673 0.583374 11.9167 0.583374V2.08337ZM2.58333 0.583374C1.43274 0.583374 0.5 1.51611 0.5 2.66671H2C2 2.34454 2.26117 2.08337 2.58333 2.08337V0.583374ZM0.833975 3.95741L6.09437 7.46434L6.92642 6.21627L1.66603 2.70934L0.833975 3.95741ZM8.40563 7.46434L13.666 3.95741L12.834 2.70934L7.57358 6.21627L8.40563 7.46434ZM6.09438 7.46434C6.79417 7.93087 7.70584 7.93087 8.40563 7.46434L7.57358 6.21627C7.37763 6.3469 7.12237 6.3469 6.92642 6.21627L6.09438 7.46434Z'
                            fill='#B8C1CC'
                          />
                        </svg>
                        <span className='text-xs font-medium hover:text-neutral-700'>
                          Email
                        </span>
                      </a>
                    </div>
                    <div className='w-full sm:w-1/2'>
                      <a
                        className='flex items-center justify-center py-3'
                        href='#'
                      >
                        <svg
                          className='mr-3'
                          width={17}
                          height={16}
                          viewBox='0 0 17 16'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M2.25 3.33333C2.25 2.59695 2.84695 2 3.58333 2H5.76949C6.05645 2 6.31121 2.18362 6.40195 2.45585L7.40049 5.45147C7.50541 5.76622 7.36292 6.11021 7.06618 6.25858L5.56134 7.011C6.29617 8.64081 7.60919 9.95383 9.239 10.6887L9.99142 9.18382C10.1398 8.88708 10.4838 8.74459 10.7985 8.84951L13.7942 9.84805C14.0664 9.93879 14.25 10.1936 14.25 10.4805V12.6667C14.25 13.403 13.653 14 12.9167 14H12.25C6.72715 14 2.25 9.52285 2.25 4V3.33333Z'
                            stroke='#B8C1CC'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                        <span className='text-xs font-medium hover:text-neutral-700'>
                          Call
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full sm:w-1/2 md:w-1/3 p-3'>
                <div className='text-center bg-white border rounded-xl'>
                  <div className='p-5 pb-9'>
                    <img
                      className='h-16 mx-auto mb-3.5'
                      src='../assets/dashy-assets/images/avatar36.png'
                      alt=''
                    />
                    <h3 className='font-semibold text-sm'>Kristin Watson</h3>
                    <p className='text-xs text-neutral-500'>3D Designer</p>
                  </div>
                  <div className='flex flex-wrap border-t divide-x'>
                    <div className='w-full sm:w-1/2'>
                      <a
                        className='flex items-center justify-center py-3'
                        href='#'
                      >
                        <svg
                          className='mr-3'
                          width={14}
                          height={12}
                          viewBox='0 0 14 12'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M1.66603 2.70934C1.32138 2.47957 0.855727 2.5727 0.625962 2.91735C0.396198 3.262 0.489328 3.72765 0.833975 3.95741L1.66603 2.70934ZM6.5104 6.84031L6.09437 7.46434H6.09438L6.5104 6.84031ZM7.9896 6.84031L7.57358 6.21627V6.21627L7.9896 6.84031ZM13.666 3.95741C14.0107 3.72765 14.1038 3.262 13.874 2.91735C13.6443 2.5727 13.1786 2.47957 12.834 2.70934L13.666 3.95741ZM2.58333 2.08337H11.9167V0.583374H2.58333V2.08337ZM12.5 2.66671V9.33337H14V2.66671H12.5ZM11.9167 9.91671H2.58333V11.4167H11.9167V9.91671ZM2 9.33337V2.66671H0.5V9.33337H2ZM2.58333 9.91671C2.26117 9.91671 2 9.65554 2 9.33337H0.5C0.5 10.484 1.43274 11.4167 2.58333 11.4167V9.91671ZM12.5 9.33337C12.5 9.65554 12.2388 9.91671 11.9167 9.91671V11.4167C13.0673 11.4167 14 10.484 14 9.33337H12.5ZM11.9167 2.08337C12.2388 2.08337 12.5 2.34454 12.5 2.66671H14C14 1.51611 13.0673 0.583374 11.9167 0.583374V2.08337ZM2.58333 0.583374C1.43274 0.583374 0.5 1.51611 0.5 2.66671H2C2 2.34454 2.26117 2.08337 2.58333 2.08337V0.583374ZM0.833975 3.95741L6.09437 7.46434L6.92642 6.21627L1.66603 2.70934L0.833975 3.95741ZM8.40563 7.46434L13.666 3.95741L12.834 2.70934L7.57358 6.21627L8.40563 7.46434ZM6.09438 7.46434C6.79417 7.93087 7.70584 7.93087 8.40563 7.46434L7.57358 6.21627C7.37763 6.3469 7.12237 6.3469 6.92642 6.21627L6.09438 7.46434Z'
                            fill='#B8C1CC'
                          />
                        </svg>
                        <span className='text-xs font-medium hover:text-neutral-700'>
                          Email
                        </span>
                      </a>
                    </div>
                    <div className='w-full sm:w-1/2'>
                      <a
                        className='flex items-center justify-center py-3'
                        href='#'
                      >
                        <svg
                          className='mr-3'
                          width={17}
                          height={16}
                          viewBox='0 0 17 16'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M2.25 3.33333C2.25 2.59695 2.84695 2 3.58333 2H5.76949C6.05645 2 6.31121 2.18362 6.40195 2.45585L7.40049 5.45147C7.50541 5.76622 7.36292 6.11021 7.06618 6.25858L5.56134 7.011C6.29617 8.64081 7.60919 9.95383 9.239 10.6887L9.99142 9.18382C10.1398 8.88708 10.4838 8.74459 10.7985 8.84951L13.7942 9.84805C14.0664 9.93879 14.25 10.1936 14.25 10.4805V12.6667C14.25 13.403 13.653 14 12.9167 14H12.25C6.72715 14 2.25 9.52285 2.25 4V3.33333Z'
                            stroke='#B8C1CC'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                        <span className='text-xs font-medium hover:text-neutral-700'>
                          Call
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  );
}

