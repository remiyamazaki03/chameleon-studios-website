import Link from "next/link";
import "../../globals.css";

export default function Disclosure() {
  return (
    <div>
      <h2 className="title m-0 d-flex align-items-center">
        Commercial Disclosure・特定商取引法に基づく表示
      </h2>
      <div className="py-5 px-5 m-0 container2">
        <div className="row pb-2">
          <div className="col-4">販売業社の名称・Name</div>
          <div className="col-8">山﨑怜実 (Remi Yamazaki)</div>
        </div>
        <div className="row pb-2">
          <div className="col-4">屋号・Business name</div>
          <div className="col-8">スタジオカメレオン・Chameleon Studios</div>
        </div>
        <div className="row pb-2">
          <div className="col-4">所在地・Address</div>
          <div className="col-8">
            〒115-0045 東京都北区赤羽1-7-9 赤羽第一葉山ビル 4F
            <br />
            1-7-9 Akabane Daiichi Hayama Building 4F
            <br />
            Akabane, Kita-ku, Tokyo 115-0045
          </div>
        </div>
        <div className="row pb-2">
          <div className="col-4">電話番号・Phone number</div>
          <div className="col-8">
            お電話でのお問い合わせは承っておりません。
            <Link href="/contact">お問合せページから</Link>
            、もしくは記載のメールアドレスまでお問い合わせください。
            <br />
            ※特定商取引法に基づき、取引時にご請求があれば遅滞なくメール等により電話番号をご連絡いたします。
            <br />
            Please inquire from the contact page or the email address listed.
            <br />
            *If a request is received at the time of a transaction, you will be
            contacted with a phone number via email without delay, in accordance
            with the Specified Commercial Transaction Law.
          </div>
        </div>
        <div className="row pb-2">
          <div className="col-4">メールアドレス・Email</div>
          <div className="col-8">hello03remi@gmail.com</div>
        </div>
        <div className="row pb-2">
          <div className="col-4">運営責任者名・Principal</div>
          <div className="col-8">山﨑怜実 (Remi Yamazaki)</div>
        </div>
        <div className="row pb-2">
          <div className="col-4">追加手数料等の追加料金・Additional fees</div>
          <div className="col-8">
            銀行振込の場合は、銀行の振込手数料。両替も含む場合は、銀行の両替手数料。
            <br />
            対面式レッスンの場合、レッスン当日の8日前以降にキャンセル・日時変更を行った場合に、キャンセル・変更手数料発生する場合がございます。
            <br />
            For wire transfers, your bank may charge additional fees for
            transfer and/or currency exchange. <br /> For in person lessons, if
            a lesson is cancelled or moved less than 8 days prior to the
            scheduled date, cancellation/administration fees may apply.
          </div>
        </div>
        <div className="row pb-2">
          <div className="col-4">
            キャンセルや返金ポリシー・Cancellation and refund policies
          </div>
          <div className="col-8">
            下記のURLをご覧ください。
            <br />
            <Link href="/policies">Please refer to this policies link.</Link>
          </div>
        </div>
        <div className="row pb-2">
          <div className="col-4">引渡時期・Delivery times</div>
          <div className="col-8">
            上記URLのポリシーに従い、双方の合意された日時にてサービス提供。
            <br /> Lesson times (service delivery) will be mutually decided upon
            in accordance with the policies listed in the link above.
          </div>
        </div>
        <div className="row pb-2">
          <div className="col-4">
            受け付け可能な決済手段・Accepted payment methods
          </div>
          <div className="col-8">
            上記ポリシーのURLをご参照ください。Please refer to the above
            policies link.
          </div>
        </div>
        <div className="row pb-2">
          <div className="col-4">決済期間・Payment period</div>
          <div className="col-8">
            上記ポリシーのURLをご参照ください。Please refer to the above
            policies link.
          </div>
        </div>
        <div className="row">
          <div className="col-4">販売価格・Pricing</div>
          <div className="col-8">
            下記のボイストレーニングページに料金情報がございます。
            <br />
            Please refer to the pricing information on{" "}
            <Link href="/voicecoach">this page.</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
