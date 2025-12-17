'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  ('use client');

  import { useState } from 'react';
  import Link from 'next/link';
  import Image from 'next/image';
  import { Menu, X, ChevronDown } from 'lucide-react';
  import { Button } from '@/components/ui/button';

  export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    return (
      <nav className='sticky top-0 z-50 bg-white border-b border-border shadow-sm'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-16'>
            {/* Logo */}
            <Link href='/' className='flex items-center gap-3'>
              <Image
                src='/cleancom logo1-06.png' // Now points to public/cleancom logo1-06.png
                alt='Cleancom Logo'
                width={140} // Adjust if needed based on your logo's natural size
                height={40} // Adjust if needed
                className='h-10 w-auto object-contain' // Consistent height, preserves aspect ratio
                priority // Fast loading for navbar
              />
              <span className='font-bold text-lg hidden sm:inline'>
                <span className='text-primary'>Clean</span>
                <span className='text-accent'>com</span>
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className='hidden lg:flex items-center gap-8'>
              <div
                className='relative group'
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className='flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium'>
                  Services
                  <ChevronDown size={16} />
                </button>
                <div className='absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all'>
                  <Link
                    href='/services/general'
                    className='block px-4 py-2 hover:bg-gray-50 text-foreground hover:text-primary'
                  >
                    General Cleaning
                  </Link>
                  <Link
                    href='/services/specialized'
                    className='block px-4 py-2 hover:bg-gray-50 text-foreground hover:text-primary'
                  >
                    Specialized Cleaning
                  </Link>
                  <Link
                    href='/services/professional'
                    className='block px-4 py-2 hover:bg-gray-50 text-foreground hover:text-primary'
                  >
                    Professional Cleaning
                  </Link>
                </div>
              </div>

              <Link
                href='/suppliers'
                className='text-foreground hover:text-primary transition-colors font-medium'
              >
                For Suppliers
              </Link>
              <Link
                href='/courses'
                className='text-foreground hover:text-primary transition-colors font-medium'
              >
                Training
              </Link>
              <Link
                href='/jobs'
                className='text-foreground hover:text-primary transition-colors font-medium'
              >
                Jobs
              </Link>
              <Link
                href='/store'
                className='text-foreground hover:text-primary transition-colors font-medium'
              >
                Store
              </Link>
            </div>

            {/* CTA Buttons */}
            <div className='hidden lg:flex items-center gap-3'>
              <Link href='/auth/login'>
                <Button variant='outline' size='sm'>
                  Sign In
                </Button>
              </Link>
              <Link href='/auth/register'>
                <Button size='sm'>Get Started</Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className='lg:hidden p-2'
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className='lg:hidden pb-4 border-t border-border'>
              <Link
                href='/services/general'
                className='block px-4 py-2 text-foreground hover:text-primary'
              >
                General Cleaning
              </Link>
              <Link
                href='/services/specialized'
                className='block px-4 py-2 text-foreground hover:text-primary'
              >
                Specialized Cleaning
              </Link>
              <Link
                href='/suppliers'
                className='block px-4 py-2 text-foreground hover:text-primary'
              >
                For Suppliers
              </Link>
              <Link
                href='/courses'
                className='block px-4 py-2 text-foreground hover:text-primary'
              >
                Training
              </Link>
              <Link
                href='/jobs'
                className='block px-4 py-2 text-foreground hover:text-primary'
              >
                Jobs
              </Link>
              <Link
                href='/store'
                className='block px-4 py-2 text-foreground hover:text-primary'
              >
                Store
              </Link>
              <div className='flex gap-2 px-4 py-3 border-t border-border mt-2'>
                <Link href='/auth/login' className='flex-1'>
                  <Button
                    variant='outline'
                    size='sm'
                    className='w-full bg-transparent'
                  >
                    Sign In
                  </Button>
                </Link>
                <Link href='/auth/register' className='flex-1'>
                  <Button size='sm' className='w-full'>
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    );
  }
  return (
    <nav className='sticky top-0 z-50 bg-white border-b border-border shadow-sm'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <Link href='/' className='flex items-center gap-3'>
            <Image
              src='/logo/cleancom logo1-06.png'
              alt='Cleancom Logo'
              width={140} // Adjust based on your logo's natural size (e.g., 140x40 or whatever fits)
              height={40} // Maintain aspect ratio – change both to match your logo
              className='h-10 w-auto object-contain' // Keeps aspect ratio, height-controlled
              priority // Loads quickly as it's in the navbar
            />
            <span className='font-bold text-lg hidden sm:inline'>
              <span className='text-primary'>Clean</span>
              <span className='text-accent'>com</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className='hidden lg:flex items-center gap-8'>
            <div
              className='relative group'
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className='flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium'>
                Services
                <ChevronDown size={16} />
              </button>
              <div className='absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all'>
                <Link
                  href='/services/general'
                  className='block px-4 py-2 hover:bg-gray-50 text-foreground hover:text-primary'
                >
                  General Cleaning
                </Link>
                <Link
                  href='/services/specialized'
                  className='block px-4 py-2 hover:bg-gray-50 text-foreground hover:text-primary'
                >
                  Specialized Cleaning
                </Link>
                <Link
                  href='/services/professional'
                  className='block px-4 py-2 hover:bg-gray-50 text-foreground hover:text-primary'
                >
                  Professional Cleaning
                </Link>
              </div>
            </div>

            <Link
              href='/suppliers'
              className='text-foreground hover:text-primary transition-colors font-medium'
            >
              For Suppliers
            </Link>
            <Link
              href='/courses'
              className='text-foreground hover:text-primary transition-colors font-medium'
            >
              Training
            </Link>
            <Link
              href='/jobs'
              className='text-foreground hover:text-primary transition-colors font-medium'
            >
              Jobs
            </Link>
            <Link
              href='/store'
              className='text-foreground hover:text-primary transition-colors font-medium'
            >
              Store
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className='hidden lg:flex items-center gap-3'>
            <Link href='/auth/login'>
              <Button variant='outline' size='sm'>
                Sign In
              </Button>
            </Link>
            <Link href='/auth/register'>
              <Button size='sm'>Get Started</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className='lg:hidden p-2' onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className='lg:hidden pb-4 border-t border-border'>
            <Link
              href='/services/general'
              className='block px-4 py-2 text-foreground hover:text-primary'
            >
              General Cleaning
            </Link>
            <Link
              href='/services/specialized'
              className='block px-4 py-2 text-foreground hover:text-primary'
            >
              Specialized Cleaning
            </Link>
            <Link
              href='/suppliers'
              className='block px-4 py-2 text-foreground hover:text-primary'
            >
              For Suppliers
            </Link>
            <Link
              href='/courses'
              className='block px-4 py-2 text-foreground hover:text-primary'
            >
              Training
            </Link>
            <Link
              href='/jobs'
              className='block px-4 py-2 text-foreground hover:text-primary'
            >
              Jobs
            </Link>
            <Link
              href='/store'
              className='block px-4 py-2 text-foreground hover:text-primary'
            >
              Store
            </Link>
            <div className='flex gap-2 px-4 py-3 border-t border-border mt-2'>
              <Link href='/auth/login' className='flex-1'>
                <Button
                  variant='outline'
                  size='sm'
                  className='w-full bg-transparent'
                >
                  Sign In
                </Button>
              </Link>
              <Link href='/auth/register' className='flex-1'>
                <Button size='sm' className='w-full'>
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
