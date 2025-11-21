import React, { useState, useRef } from "react";
import { assets } from "../assetsa/assets";

const SignUp = () => {
  const [step, setStep] = useState("signup");
  const [name, setName] = useState("");
  const [family, setFamily] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // ---------- Verification State ----------
  const [code, setCode] = useState(["", "", "", ""]);
  const [verifyError, setVerifyError] = useState("");
  const [loadingVerify, setLoadingVerify] = useState(false);

  const codeRefs = useRef([]);

  // ---------- Form Validation ----------
  const isFormValid =
    name.trim().length > 1 &&
    family.trim().length > 1 &&
    /^09\d{9}$/.test(phone);

  // ---------- Sign Up API ----------
  const handleSignUp = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        "https://rentify-nqd6.onrender.com/auth/register-start",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            first_name: name,
            last_name: family,
            phone: phone,
            acceptedTerms: true,
            role: "user",
            officeName: "Iran Amlak",
          }),
        }
      );

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "خطا در ثبت‌نام");

      setStep("verify");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // ---------- Verify Code API ----------
  const handleVerify = async () => {
    const codeStr = code.join("");
    if (codeStr.length !== 4) return;

    setLoadingVerify(true);
    setVerifyError("");

    try {
      const response = await fetch(
        "https://rentify-nqd6.onrender.com/auth/register-verify",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ phone, code: codeStr }),
        }
      );

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "خطا در تایید کد");

      console.log("تایید موفق:", data);
      alert("ورود موفق!"); 
    } catch (err) {
      setVerifyError(err.message);
    } finally {
      setLoadingVerify(false);
    }
  };

  // ---------- Handle Code Input ----------
  const handleCodeChange = (e, index) => {
    const val = e.target.value.replace(/\D/g, "");
    const newCode = [...code];
    newCode[index] = val;
    setCode(newCode);

    if (val && index < 3) {
      codeRefs.current[index + 1].focus();
    }
  };

  return (
    <div className="w-full h-screen flex flex-row" dir="ltr">
      {/* Left Image */}
      <div className="hidden md:flex w-1/2 bg-[#e9f0ff] items-center justify-center">
        <img
          src={assets.login}
          alt="login"
          className="w-[80%] max-w-[550px]"
        />
      </div>

      {/* Right Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white">
        <div className="w-[85%] max-w-[420px]">
          {/* ---------- Sign Up Step ---------- */}
          {step === "signup" && (
            <>
              <div className="text-center mb-6">
                <h1 className="text-3xl font-bold">Rentify</h1>
                <p className="text-xl mt-2 font-medium">ورود | ثبت‌نام</p>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (isFormValid) handleSignUp();
                }}
                className="flex flex-col gap-4"
              >
                <div>
                  <label className="block mb-1 text-sm">نام</label>
                  <input
                    type="text"
                    className="w-full p-3 rounded-lg border"
                    placeholder="حسین"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block mb-1 text-sm">نام خانوادگی</label>
                  <input
                    type="text"
                    className="w-full p-3 rounded-lg border"
                    placeholder="احمدی"
                    value={family}
                    onChange={(e) => setFamily(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block mb-1 text-sm">شماره موبایل</label>
                  <input
                    type="text"
                    className="w-full p-3 rounded-lg border text-left"
                    placeholder="09123456789"
                    dir="ltr"
                    value={phone}
                    onChange={(e) => {
                      const v = e.target.value.replace(/\D/g, "").slice(0, 11);
                      setPhone(v);
                    }}
                  />
                </div>

                {error && (
                  <p className="text-red-500 text-sm">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={!isFormValid || loading}
                  className={`w-full py-3 rounded-lg mt-2 text-white transition ${
                    isFormValid && !loading
                      ? "bg-blue-500 hover:bg-blue-600"
                      : "bg-gray-300 cursor-not-allowed"
                  }`}
                >
                  {loading ? "در حال ارسال..." : "تأیید و دریافت کد"}
                </button>
              </form>
            </>
          )}

          {/* ---------- Verify Step ---------- */}
          {step === "verify" && (
            <div className="text-center">
              <h1 className="text-3xl font-bold mb-4">Rentify</h1>
              <p className="text-xl font-bold mb-2">کد تأیید</p>
              <p className="text-gray-600 mb-3">
                کد ارسال شده به شماره{" "}
                <span className="font-bold">{phone}</span> را وارد کنید
              </p>

              <button
                onClick={() => setStep("signup")}
                className="text-blue-600 underline text-sm mb-4"
              >
                ویرایش شماره موبایل
              </button>

              {verifyError && (
                <p className="text-red-500 text-sm mb-2">{verifyError}</p>
              )}

              <div className="flex justify-between gap-3 mb-5">
                {code.map((digit, i) => (
                  <input
                    key={i}
                    ref={(el) => (codeRefs.current[i] = el)}
                    maxLength={1}
                    className="w-14 h-14 text-xl text-center border rounded-lg"
                    value={digit}
                    onChange={(e) => handleCodeChange(e, i)}
                  />
                ))}
              </div>

              <button
                onClick={handleVerify}
                disabled={loadingVerify}
                className="w-full py-3 bg-blue-600 text-white rounded-lg"
              >
                {loadingVerify ? "در حال بررسی..." : "ورود"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
