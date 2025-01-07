import React from "react";
import { Link } from "react-router";
import Container from "./Container";
import { MdLocationOn } from "react-icons/md";

export default function Footer() {
  return (
    <div className="bg-primary-400">
      <Container>
        <footer className="flex flex-col items-start justify-between whitespace-nowrap py-12 text-white max-sm:gap-8 sm:flex-row">
          <div className="flex basis-2/3 flex-col items-start justify-between gap-8 sm:flex-row md:gap-12 lg:basis-1/2">
            <section>
              <h4 className="mb-2 text-lg font-bold uppercase sm:mb-4">
                Link Info
              </h4>
              <ul className="space-y-1 font-medium capitalize tracking-wide">
                <li>
                  <Link className="hover:under hover:underline hover:underline-offset-2">
                    SkinCare
                  </Link>
                </li>
                <li>
                  <Link className="hover:under hover:underline hover:underline-offset-2">
                    Makeup
                  </Link>
                </li>
                <li>
                  <Link className="hover:under hover:underline hover:underline-offset-2">
                    New Product
                  </Link>
                </li>
              </ul>
            </section>
            <section>
              <h4 className="mb-2 text-lg font-bold uppercase sm:mb-4">
                support
              </h4>
              <ul className="space-y-1 font-medium capitalize tracking-wide">
                <li>
                  <Link className="hover:under hover:underline hover:underline-offset-2">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link className="hover:under hover:underline hover:underline-offset-2">
                    contact us
                  </Link>
                </li>
                <li>
                  <Link className="hover:under hover:underline hover:underline-offset-2">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </section>
            <section>
              <h4 className="mb-2 text-lg font-bold uppercase sm:mb-4">
                about
              </h4>
              <ul className="space-y-1 font-medium capitalize tracking-wide">
                <li>
                  <Link className="hover:under hover:underline hover:underline-offset-2">
                    team
                  </Link>
                </li>
                <li>
                  <Link className="hover:under hover:underline hover:underline-offset-2">
                    delivery and returns
                  </Link>
                </li>
                <li>
                  <Link className="hover:under hover:underline hover:underline-offset-2">
                    FAQ
                  </Link>
                </li>
              </ul>
            </section>
          </div>
          <div>
            <h4 className="mb-2 text-lg font-semibold uppercase sm:mb-4">
              contact us
            </h4>
            <p className="flex items-center gap-2 font-medium capitalize tracking-wide">
              <span>
                <MdLocationOn className="h-5 w-5" />
              </span>
              Ramnagar, Uttarakhand
            </p>
          </div>
        </footer>
      </Container>
    </div>
  );
}
