import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

const INIT = "INIT";
const SUBMITTING = "SUBMITTING";
const ERROR = "ERROR";
const SUCCESS = "SUCCESS";
const formStates = [INIT, SUBMITTING, ERROR, SUCCESS] as const;
const formStyles = {

    // Add your own Loops ID

    "id": "clm7mw9lf00remq0plmvilb4u",

    "name": "Default",
    "formStyle": "inline",
    "placeholderText": "your@email.com",
    "formFont": "Inter",
    "formFontColor": "#000000",
    "formFontSizePx": 16,

    // Customize the CTA

    "buttonText": "Subscribe",
    "buttonFont": "Inter",
    "buttonFontColor": "#",
    "buttonColor": "#",
    "buttonFontSizePx": 14,

    // Customize the success message

    "successMessage": "Success! 🏊‍♂️🚴‍♂️🏃‍♂️",
    "successFont": "Inter",
    "successFontColor": "#FFFFFF",
    "successFontSizePx": 14,
    "userGroup": "NewsletterSignUp"
}
const domain = "app.loops.so"

export default function NewsLetterSignUp() {
    const [email, setEmail] = useState("");
    const [formState, setFormState] = useState<typeof formStates[number]>(INIT);
    const [errorMessage, setErrorMessage] = useState("");

    const resetForm = () => {
        setEmail("");
        setFormState(INIT);
        setErrorMessage("");
    };

    /**
     * Rate limit the number of submissions allowed
     * @returns {boolean} true if the form has been successfully submitted in the past minute
     */
    const hasRecentSubmission = () => {
        const time = new Date();
        const timestamp = time.valueOf();
        const previousTimestamp = localStorage.getItem("loops-form-timestamp");

        // Indicate if the last sign up was less than a minute ago
        if (
            previousTimestamp &&
            Number(previousTimestamp) + 60 * 1000 > timestamp
        ) {
            setFormState(ERROR);
            setErrorMessage("CMD/CRTL + R");
            return true;
        }

        localStorage.setItem("loops-form-timestamp", timestamp.toString());
        return false;
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        // Prevent the default form submission
        event.preventDefault();

        // boundary conditions for submission
        if (formState !== INIT) return;
        if (!isValidEmail(email)) {
            setFormState(ERROR);
            setErrorMessage("Please enter a valid email");
            return;
        }
        if (hasRecentSubmission()) return;
        setFormState(SUBMITTING);

        // build body
        const formBody = `userGroup=${encodeURIComponent(
            formStyles.userGroup
        )}&email=${encodeURIComponent(email)}`;

        // API request to add user to newsletter
        fetch(`https://${domain}/api/newsletter-form/${formStyles.id}`, {
            method: "POST",
            body: formBody,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        })
            .then((res: any) => [res.ok, res.json(), res])
            .then(([ok, dataPromise, res]) => {
                if (ok) {
                    resetForm();
                    setFormState(SUCCESS);
                } else {
                    dataPromise.then((data: any) => {
                        setFormState(ERROR);
                        setErrorMessage(data.message || res.statusText);
                        localStorage.setItem("loops-form-timestamp", "");
                    });
                }
            })
            .catch((error) => {
                setFormState(ERROR);
                // check for cloudflare error
                if (error.message === "Failed to fetch") {
                    setErrorMessage("CMD/CRTL + R");
                } else if (error.message) {
                    setErrorMessage(error.message);
                }
                localStorage.setItem("loops-form-timestamp", "");
            });
    };

    const isInline = formStyles.formStyle === "inline";

    switch (formState) {

        // This is the SUCCESS state of the site.

        case SUCCESS:
            return (
                <>
                    <div className="mt-6 w-full cursor-default">
                        <form autoComplete="off" onSubmit={handleSubmit} className="bg-white items-center flex flex-row border p-1.5 focus-within:outline-1 w-full rounded-lg">
                            <span className="text-xs w-full flex-grow-2 h-full p-2 placeholder:text-zinc-400 text-black focus:outline-none outline-none focus:border-none">✅ You&apos;ve been added to my mailing list.</span>
                            <SignUpFormButton />
                        </form>
                    </div>
                </>
            );

        // This is the ERROR state of the site.

        case ERROR:
            return (
                <>
                    <div className="mt-6 w-full cursor-default">
                        <form autoComplete="off" onSubmit={handleSubmit} className="bg-white items-center flex flex-row border p-1.5 focus-within:outline-1 w-full rounded-lg">
                            <span className="text-xs w-full flex-grow-2 h-full p-2 placeholder:text-zinc-400 text-black focus:outline-none outline-none focus:border-none">Something went wrong. Try again.</span>
                            <SignUpFormButton />
                        </form>
                    </div>
                </>
            );

        // This is the DEFAULT state of the site.

        default:
            return (
                <>
                    <div className="mt-6 w-full cursor-default">
                        <form autoComplete="off" onSubmit={handleSubmit} className="bg-white flex flex-row border p-1.5 focus-within:outline-1 w-full rounded-lg">
                            <input autoComplete="on" name="email" type="text" placeholder={formStyles.placeholderText} value={email} onChange={(e) => setEmail(e.target.value)} required={true} aria-label="Email address" className="w-full flex-grow-2 h-10 p-2 placeholder:text-zinc-400 mr-1 rounded text-black focus:outline-none outline-none focus:border-none" />
                            <SignUpFormButton />
                        </form>
                    </div>
                </>
            );
    }

    function SignUpFormButton({ props }: any) {
        return (
            <button className="text-sm flex flex-row bg-stone-200 p-4 h-10 justify-center rounded-lg text-stone-700 items-center font-semibold border-gray-200 card-shine-effect"
                type="submit">
                {formState === SUBMITTING ? "2 sec..." : formStyles.buttonText}
            </button>
        );
    }
}

function isValidEmail(email: any) {
    return /.+@.+/.test(email);
}